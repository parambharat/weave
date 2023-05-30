import {
  AutosuggestResult,
  Parser,
  Stack,
  voidNode,
  WeaveInterface,
} from '@wandb/weave/core';
import _ from 'lodash';
import React from 'react';
import {
  Editor,
  Location,
  Node as SlateNode,
  NodeEntry,
  Point,
  Range,
  Text,
  Transforms,
} from 'slate';
import {ReactEditor, useFocused, useSlateStatic} from 'slate-react';

import {usePanelContext} from '../../components/Panel2/PanelContext';
import {WeaveExpressionState} from './state';
import type {SuggestionProps, WeaveExpressionProps} from './types';
import {getIndexForPoint, moveToNextMissingArg, trace} from './util';

// Provides the decorate callback to pass to Slate's Editable
// component and implements syntax highlighting and styling
// for active node.  The marked ranges are used by Slate to
// emit spans affixed with classes.  See `./styles.ts` for the
// actual CSS rules.
export const useWeaveDecorate = (
  editor: Editor,
  rootNode?: Parser.SyntaxNode
) => {
  // Each line is passed separately, so we pass the parse tree
  // separately and apply some arithmetic to get to the right
  // offset(s)
  return React.useCallback(
    ([node, path]: NodeEntry) => {
      // decorate returns an array of ranges with marks applied
      const ranges: Range[] = [];

      const editorIsFocused = ReactEditor.isFocused(editor);

      function pushRange(r: Range) {
        // The active node range may lie across several ranges.  Any
        // range that intersects the active node range should be
        // styled active.
        if (editorIsFocused && editor.activeNodeRange != null) {
          const activeNodeIntersect = Range.intersection(
            editor.activeNodeRange as any,
            r
          );
          if (activeNodeIntersect != null) {
            r.ACTIVE_NODE = true;
          }
        }
        ranges.push(r);
      }

      function pushRangesForNode(
        parseNode: Parser.SyntaxNode,
        typeStack: string[]
      ): void {
        if (['"', "'", '(', ')', '[', ']', '.'].includes(parseNode.type)) {
          return;
        }

        // Recursively push ranges for this node or its named children.
        if (parseNode.namedChildCount > 0) {
          for (const childNode of parseNode.namedChildren) {
            pushRangesForNode(childNode, [...typeStack, parseNode.type]);
          }
        } else {
          const typesToApply = Object.fromEntries(
            typeStack.concat(parseNode.type).map(t => [t, true])
          );
          pushRange({
            ...typesToApply,
            anchor: {path, offset: parseNode.startIndex - baseOffset},
            focus: {path, offset: parseNode.endIndex - baseOffset},
          });
        }
      }

      if (rootNode == null || !Text.isText(node)) {
        // Can't do highlighting if there's no parse tree and ignore non-text nodes
        return ranges;
      }

      // baseOffset is relative to the editor's entire contents, not just this node.
      const baseOffset = getIndexForPoint(editor, {path, offset: 0});

      // Starting at the base offset, get the parse node at the cursor position
      // and recursively push ranges for that node and its children.
      for (
        let cursor = baseOffset,
          parseNode = rootNode.namedDescendantForIndex(cursor);
        cursor < baseOffset + node.text.length && parseNode.parent !== null;
        cursor = parseNode.endIndex + 1,
          parseNode = rootNode.namedDescendantForIndex(cursor)
      ) {
        pushRangesForNode(parseNode, []);
      }

      return ranges;
    },
    [editor, rootNode]
  );
};

function serializeStack(stack: Stack, weave: WeaveInterface) {
  return _.map(stack, weave.expToString.bind(weave));
}

export const useWeaveExpressionState = (
  props: WeaveExpressionProps,
  editor: Editor,
  weave: WeaveInterface
) => {
  // Most of the state is managed by the WeaveExpressionState class.
  // This hook manages the state object and its lifecycle, and
  // avoids recreating the class when the props change in response
  // to a new expression being entered.
  const currentProps = React.useRef(props);

  const {stack} = usePanelContext();
  const currentStack = React.useRef(stack);
  const internalState: WeaveExpressionState = React.useMemo(
    () =>
      new WeaveExpressionState(
        currentProps.current,
        weave,
        stack,
        editor,
        newState => setExternalState({...newState} as any),
        text => Transforms.insertText(editor, text, {at: []})
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [weave, editor]
  );

  const [isFocused, setIsFocused] = React.useState(false);
  const onBlur = React.useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);
  const onFocus = React.useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  // Internal state should never be reinstantiated, but props will change
  // when a new expression is entered.  Capture these changes and dispatch
  // the appropriate event to the state machine.
  React.useEffect(() => {
    if (!isFocused && currentProps.current.expr !== props.expr) {
      internalState.dispatch({
        type: 'exprChanged',
        expr: props.expr ?? voidNode(),
      });
    }

    if (currentProps.current.setExpression !== props.setExpression) {
      internalState.dispatch({
        type: 'setExprChanged',
        setExpr: props.setExpression as any,
      });
    }

    if (
      !_.isEqual(
        serializeStack(currentStack.current, weave),
        serializeStack(stack, weave)
      )
    ) {
      internalState.dispatch({
        type: 'stackChanged',
        stack: stack ?? [],
      });
    }

    currentProps.current = props;
    currentStack.current = stack;
  }, [isFocused, internalState, props, weave, stack]);

  const {onMount} = props;

  React.useEffect(() => {
    if (onMount != null) {
      onMount(editor);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [externalState, setExternalState] =
    React.useState<WeaveExpressionState>(internalState);

  const onChange = React.useCallback(
    (newValue: SlateNode[], newStack: Stack) => {
      internalState.dispatch({
        type: 'editorChanged',
        newValue,
        stack: newStack,
      });
    },
    [internalState]
  );

  const applyPendingExpr = React.useCallback(() => {
    internalState.dispatch({type: 'flushPendingExpr'});
  }, [internalState]);

  const [suppressSuggestions, setSuppressSuggestions] = React.useState(false);
  const hideSuggestions = React.useCallback(
    (nMillis: number) => {
      setSuppressSuggestions(true);
      setTimeout(() => setSuppressSuggestions(false), nMillis);
    },
    [setSuppressSuggestions]
  );

  trace(`${internalState.id}: useWeaveExpressionState render`, externalState);

  return {
    // Slate's onChange callback
    onChange,

    // Slate's value prop
    slateValue: externalState?.editorValue,

    // SuggestionState to pass into Suggestions component
    suggestions: externalState?.suggestions,

    // Root of Tree-Sitter parse-tree.
    tsRoot: externalState?.tsRoot,

    // Expression has been modified
    exprIsModified: externalState?.exprIsModified,

    // The empty expression is considered a valid state
    isValid: externalState?.isValid,

    // When busy, disallow run/submit
    isBusy: externalState?.isBusy,

    // Flush pending expression in non-live-update mode
    applyPendingExpr,

    // To hide suggestions momentarily
    suppressSuggestions,

    // Callback to hide suggestions for n milliseconds
    hideSuggestions,

    // EE focus state
    isFocused,
    onFocus,
    onBlur,
  };
};

// Manage visibility and position of run button
export const useRunButtonVisualState = (
  editor: Editor,
  isDirty: boolean,
  isValid: boolean,
  isFocused: boolean
) => {
  const container = React.useRef<HTMLDivElement | null>(null);
  const applyButton = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const containerNode = container.current;
    const buttonNode = applyButton.current;

    if (containerNode == null || buttonNode == null) {
      return;
    }

    if (
      !isValid ||
      (!isDirty && (!isFocused || Editor.string(editor, []).trim() === ''))
    ) {
      buttonNode.style.display = 'none';
    } else {
      buttonNode.style.display = 'inline-block';
    }

    const endNode = ReactEditor.toDOMNode(editor, Editor.last(editor, [])[0]);

    let grandOffset = 0;
    for (let n = endNode; !n?.dataset.slateEditor; n = n?.parentNode as any) {
      if (n?.dataset.slateNode === 'element') {
        grandOffset += n!.offsetHeight;
      }
      grandOffset += n!.offsetTop;
    }

    const maxLeft = containerNode.offsetWidth - buttonNode.offsetWidth - 5;
    const naturalLeft = endNode.offsetLeft + endNode.offsetWidth + 10;
    // Using setProperty because we need the !important priority on these
    // since semantic-ui also sets it.
    if (naturalLeft > maxLeft) {
      buttonNode.style.setProperty('opacity', '0.3', 'important');
    } else {
      buttonNode.style.setProperty('opacity', '1.0', 'important');
    }

    buttonNode.style.left = `${Math.min(maxLeft, naturalLeft)}px`;
    buttonNode.style.top = `${grandOffset - 20}px`;
  });

  return {
    containerRef: container,
    applyButtonRef: applyButton,
  };
};

export function useSuggestionTakerWithSlateStaticEditor(
  suggestionProps: SuggestionProps,
  weave: WeaveInterface
) {
  const slateStaticEditor = useSlateStatic();
  return useSuggestionTaker(suggestionProps, weave, slateStaticEditor);
}

// Get a callback for taking suggestions and manage
// suggestion selection state
export const useSuggestionTaker = (
  {node, extraText, isBusy}: SuggestionProps,
  weave: WeaveInterface,
  editor: Editor
) => {
  const [suggestionIndex, setSuggestionIndex] = React.useState(0);

  // Consolidated heuristics to deal with imperfect suggestions results
  const applyHacks = React.useCallback(
    (s: AutosuggestResult<any>) => {
      // const resultString = s.suggestionString.trim();
      const resultString = weave.expToString(s.newNodeOrOp, null);
      // By default, append the result to end of activeNodeRange if it exists, otherwise end of entire text
      let resultAt: Range | Point =
        (editor.activeNodeRange as Range) ?? Editor.end(editor, []);

      if (node.nodeType === 'var' || node.nodeType === 'const') {
        // Suggestions for var nodes always include the var itself
        // Suggestions for const nodes always replace the const
        resultAt = editor.activeNodeRange as Range;
      }

      if (extraText) {
        // If extraText is present, expand insertion range so we consume it too
        if (Range.isRange(resultAt)) {
          const end = Range.end(resultAt);
          resultAt = {
            anchor: Range.start(resultAt),
            focus: {
              ...end,
              offset: end.offset + extraText.length,
            },
          };
        } else {
          // Point
          resultAt = {
            anchor: resultAt,
            focus: {
              ...(resultAt as Point),
              offset: (resultAt as Point).offset + extraText.length + 1,
            },
          };
        }
      }
      return [resultString, resultAt] as [string, Range | Point];
    },
    [editor, extraText, node.nodeType, weave]
  );

  const takeSuggestion = React.useCallback(
    (s: AutosuggestResult<any>) => {
      trace('takeSuggestion', s);

      if (isBusy) {
        return;
      }

      ReactEditor.focus(editor);
      const [suggestion, insertPoint] = applyHacks(s);
      const prevSelection = {...editor.selection};
      Transforms.insertText(editor, suggestion, {
        at: insertPoint,
      });
      Transforms.select(editor, prevSelection as Location);
      moveToNextMissingArg(editor);
    },
    [editor, applyHacks, isBusy]
  );

  return {
    suggestionIndex,
    setSuggestionIndex,
    takeSuggestion,
  };
};

// Managed suggestions component state
export const useSuggestionVisualState = ({
  node,
  typeStr,
  items,
  forceHidden,
}: SuggestionProps) => {
  const paneRef = React.useRef<HTMLDivElement | null>(null);
  const editor = useSlateStatic();
  const focused = useFocused();

  // Manage suggestions pane visibility and positioning
  React.useEffect(() => {
    const element = paneRef.current;

    if (!element) {
      trace(`SuggestionVisualState: no element`);
      return;
    }

    if (
      items.length === 0 ||
      !focused ||
      forceHidden ||
      (editor.selection != null && Range.isExpanded(editor.selection))
    ) {
      trace(
        `SuggestionVisualState: hiding`,
        items.length,
        focused,
        forceHidden,
        editor.selection != null && Range.isExpanded(editor.selection)
      );
      element.removeAttribute('style');
      return;
    }

    const domSelection = window.getSelection()!;

    // Hack around a bug where empty spans yield bounding rect of [0,0]->[0,0]
    if (domSelection.rangeCount < 1) {
      trace(`SuggestionVisualState: rangeCount < 1, removing style`);
      element.removeAttribute('style');
      return;
    }

    const domRange = domSelection.getRangeAt(0).cloneRange();
    domRange.setStart(domRange.startContainer, 0);
    let rect = domRange.getBoundingClientRect();

    if (rect.top === 0 && rect.left === 0) {
      rect = (domRange.startContainer as any).getBoundingClientRect();
    }

    if (rect.top === 0 && rect.left === 0) {
      trace(
        `SuggestionVisualState: rect is [0,0]->[0,0], removing style`,
        domRange,
        rect
      );
      element.removeAttribute('style');
      return;
    }

    trace(`SuggestionVisualState: showing`);
    element.style.opacity = '1';
    element.style.top = `${rect.top + window.pageYOffset + 25}px`;

    // Prevent suggestions pane from extending off the page
    const maxLeftPosition = document.body.scrollWidth - 510;
    const naturalLeftPosition = rect.right + window.pageXOffset;
    element.style.left = `${Math.min(maxLeftPosition, naturalLeftPosition)}px`;

    rect = element.getBoundingClientRect();
    if (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    ) {
      element
        .querySelector('ul.items-list li.default-suggestion')!
        .scrollIntoView({block: 'nearest', inline: 'nearest'});
    }
  });

  const showType = React.useMemo(() => {
    if (
      node.nodeType === 'void' ||
      typeStr == null ||
      ['any', 'unknown', 'invalid'].includes(typeStr)
    ) {
      return false;
    }

    return true;
  }, [node, typeStr]);

  return {
    // Ref to pass to SuggestionPane component, req'd to manage its position
    paneRef,

    // Should we show the type?
    showType,
  };
};
