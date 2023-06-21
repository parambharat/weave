[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/components/Panel2/PanelFileText)

The `PanelFileText` component in the `weave` project is responsible for rendering a file's contents as text with syntax highlighting. It is a React functional component that takes in a `PanelProps` object as its props, which includes an `inputType` property. The component retrieves the file contents using the `useNodeValue` hook from the `CGReact` module and processes the text for display using the `processTextForDisplay` function.

The component has a file size limit of 25 MB, a line length limit of 1000 characters, and a total lines limit of 10000. If the file size exceeds the limit, a message is displayed indicating that the text view is limited to files less than the specified size. If any lines are truncated, a warning message is displayed indicating the number of lines truncated and the maximum line length.

The `PanelFileText` component uses the `Prism` library for syntax highlighting, which is determined by the `languageFromFileName` helper function. This function takes in a file extension and returns the corresponding language for syntax highlighting using the `EXTENSION_INFO` object from the `common` module.

Example usage:

```javascript
import { Spec } from 'weave/text';

// Use the Spec object to create a new panel
const myPanel = new Panel(Spec);

// Render the panel with a file's contents
const fileContents = 'const example = "Hello, World!";';
myPanel.render(fileContents, '.js');
```

The `common` module provides several constants and a function that are used throughout the larger project. The `EXTENSION_INFO` constant maps file extensions to their corresponding types, while the `inputType` constant describes the expected input for a function in the project. The `processTextForDisplay` function processes the text for display based on the file extension and provided limits.

Example usage of `EXTENSION_INFO`:

```javascript
import { EXTENSION_INFO } from 'weave';

const fileType = EXTENSION_INFO['.md']; // 'markdown'
```

The `index` module exports a `PanelSpec` object and some other variables and functions. The `PanelSpec` object contains three properties: `id`, `Component`, and `inputType`. The `Component` property is defined using `React.lazy`, allowing for lazy loading of components, improving performance. The `inputType` variable is imported from the `common` module, which also exports `EXTENSION_INFO` and `processTextForDisplay`.

Example usage:

```javascript
import { Spec, processTextForDisplay } from 'weave/text';

// Use the Spec object to create a new panel
const myPanel = new Panel(Spec);

// Use the processTextForDisplay function to format text for display
const formattedText = processTextForDisplay('Lorem ipsum dolor sit amet');
```

Overall, the `PanelFileText` component and its related modules provide a useful way to display a file's contents as text with syntax highlighting, while also handling file size and line length limits.
