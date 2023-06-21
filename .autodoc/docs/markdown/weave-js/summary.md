[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js)

The `weave-js` folder contains various TypeScript and JavaScript files, as well as configuration files for the Weave project. These files are essential for extending the functionality of the project, setting up the build process, and maintaining code quality and consistency.

For example, the `custom-slate.d.ts` file defines custom types for the Slate.js editor, allowing developers to extend the functionality of the editor by defining custom types. This can be useful for adding additional metadata to the editor, such as the type of text or the range of text that is currently selected.

```typescript
import { Editor, Transforms } from 'slate';

// Define a custom type for a heading element
type HeadingElement = {
  type: 'heading';
  level: number;
  children: CustomText[];
};

// Extend the existing types with the custom type
declare module 'slate' {
  interface CustomTypes {
    Element: HeadingElement;
  }
}

// Define a function to toggle the level of a heading
const toggleHeading = (editor: Editor, level: number) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === 'heading',
  });
  if (match) {
    const [, path] = match;
    Transforms.setNodes(
      editor,
      { level },
      { at: path }
    );
  }
};

// Use the custom type to create a heading element
const element: HeadingElement = {
  type: 'heading',
  level: 1,
  children: [{ text: 'Hello, world!' }],
};
```

The `vite.config.ts` file is a configuration file for the Weave project's build tool, Vite. It sets up various plugins and options for Vite to use during development and production builds.

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import blockCjsPlugin from './vite-plugin-block-cjs';
import fileUrls from './vite-plugin-file-urls';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode, command }) => {
  const plugins = [svgr(), blockCjsPlugin, fileUrls];

  if (mode !== 'production') {
    plugins.unshift(
      react({
        jsxRuntime: 'classic',
      })
    );
  }

  if (command === 'build') {
    plugins.push(visualizer());
  }

  return {
    plugins,
    base: mode === 'production' ? '/my-app/' : '/',
    server: {
      port: 3000,
    },
    build: {
      outDir: 'dist',
    },
  };
});
```

The `eslint-plugin-wandb` folder contains a custom ESLint plugin with three rules to enforce specific coding standards within the project. These rules help maintain code quality and consistency throughout the project.

```javascript
// sample code that violates the "curly" rule
if (condition)
  doSomething();

// sample code that violates the "no-console" rule
console.log("Hello, world!");
```

In summary, the `weave-js` folder contains essential files for extending the functionality of the Weave project, setting up the build process, and maintaining code quality and consistency. Developers working on the Weave project should be familiar with these files to modify the project's layout, add new functionality, or improve the build process.
