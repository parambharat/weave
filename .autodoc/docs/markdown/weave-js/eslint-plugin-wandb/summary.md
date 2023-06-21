[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/eslint-plugin-wandb)

The `eslint-plugin-wandb` folder in the `weave-js` project contains a custom ESLint plugin with three rules to enforce specific coding standards within the project. These rules are related to the usage of anchor tags, URL prefixes, and relative imports of files outside the workspace root.

The `index.js` file exports an object with three functions: `isGlobalThisReferenceOrGlobalWindow`, `skipChainExpression`, and `getProjectRoot`. These functions are utility functions used by the custom ESLint rules.

- `isGlobalThisReferenceOrGlobalWindow(scope, node)` checks if the given `node` is a reference to the global `this` object or the global `window` object. This function is useful for identifying global references in the code, which might be considered bad practice.

- `skipChainExpression(node)` returns the `expression` property of the given `node` if its type is `'ChainExpression'`. Otherwise, it returns the `node` itself. This function is useful for traversing the AST (Abstract Syntax Tree) and skipping chain expressions when analyzing the code.

- `getProjectRoot(filename)` returns the root directory of the project containing the specified `filename`. This function is useful for determining the project root when analyzing imports and ensuring that relative imports do not reference files outside the workspace root.

The `rules` object contains three custom ESLint rules:

1. `no-a-tags`: This rule enforces that JSX anchor tags (`<a>`) should have a `component` prop with a value of `'a'`. If the anchor tag has a `target`, `href`, or `download` prop, the `href` prop should start with `'http'`, `'mailto:'`, or `'#'`. This rule helps ensure that anchor tags are used correctly and consistently throughout the project.

   Example of valid usage:

   ```jsx
   <a component="a" href="https://example.com">Link</a>
   ```

   Example of invalid usage:

   ```jsx
   <a href="/relative-url">Link</a>
   ```

2. `no-unprefixed-urls`: This rule enforces that certain functions should not be called with a URL argument that does not start with `'http'` or `'#'`. This rule helps ensure that URLs are used consistently throughout the project.

   Example of valid usage:

   ```javascript
   fetchData("https://example.com/data");
   ```

   Example of invalid usage:

   ```javascript
   fetchData("/relative-url/data");
   ```

3. `no-relative-imports-of-files-outside-workspace-root`: This rule enforces that imported files should not be located outside the root directory of the project. This rule helps ensure that imports are organized and do not reference files outside the workspace root.

   Example of valid usage:

   ```javascript
   import MyComponent from "./components/MyComponent";
   ```

   Example of invalid usage:

   ```javascript
   import MyComponent from "../../outside-workspace/components/MyComponent";
   ```

In summary, the `eslint-plugin-wandb` folder contains a custom ESLint plugin with three rules and utility functions to enforce specific coding standards within the `weave-js` project. These rules help maintain code quality and consistency throughout the project.
