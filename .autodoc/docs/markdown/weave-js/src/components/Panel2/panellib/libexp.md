[View code on GitHub](https://github.com/wandb/weave/weave-js/src/components/Panel2/panellib/libexp.ts)

The code in this file provides two functions, `useRefineExpressionEffect` and `useRefineExpressionsEffect`, that can be used to asynchronously update expressions in a panel's configuration. These functions are designed to be used by any panel that constructs and maintains an expression in their own config.

The `useRefineExpressionEffect` function takes in an expression, frame, and update callback, and updates the expression asynchronously if needed. The function returns a boolean that acts as a "loading" guard and will be `true` when the expression is in the async process of refinement. The panel should not load any children panels as the output node is unsafe at that time. The refinement will happen on the first load of the panel, allowing for type system/cg updates, as well as any time variables referenced by the expression change.

The `useRefineExpressionsEffect` function is similar to `useRefineExpressionEffect`, but it takes in an array of expressions instead of just one. This function also returns a boolean that acts as a "loading" guard.

Both functions use the `makePromiseUsable` function from the `../PanelTable/hooks` module to make the refinement process asynchronous and usable with React hooks.

Overall, these functions provide a convenient way for panels to update their expressions asynchronously and ensure that the expressions are always up-to-date with any changes in variables or the type system. Panels can use these functions to provide a smoother user experience and avoid any potential errors that may arise from outdated expressions. 

Example usage:

```
import { useRefineExpressionEffect } from 'weave';

function MyPanel(props) {
  const [expression, setExpression] = useState('some expression');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    useRefineExpressionEffect(expression, props.frame, (refinedExpression) => {
      setExpression(refinedExpression);
      setIsLoading(false);
    });
  }, [expression, props.frame]);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>{expression}</p>}
    </div>
  );
}
```
## Questions: 
 1. What is the purpose of the `makePromiseUsable` function and how is it used in this code?
- The `makePromiseUsable` function is used to convert a promise-based function into a function that can be used with React's `useEffect` hook. It is used to create two new functions, `useRefineExpressionEffect` and `useRefineExpressionsEffect`, which can be used to asynchronously update expressions in a panel's config.

2. What is the expected pattern for using the `useRefineExpressionEffect` and `useRefineExpressionsEffect` functions?
- The expected pattern is that a panel will construct a frame using its input nodes and call the appropriate `use` function. The returned boolean will act as a "loading" guard and will be `true` while the expression is being refined. The panel should not load any children panels during this time.

3. What is the purpose of the `refineExpression` and `refineExpressions` functions?
- The `refineExpression` function is used to asynchronously update a single expression in a panel's config, while the `refineExpressions` function is used to update multiple expressions at once. Both functions are used to allow for type system and cg updates, as well as updates when variables referenced by the expression(s) change.