[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/components/Panel2/PanelFileTextDiff)

The `PanelFileTextDiff` folder contains code for a `weave` project component that allows users to compare the contents of two text files and highlight their differences. The folder consists of three files: `Component.tsx`, `common.ts`, and `index.ts`.

`Component.tsx` defines the `PanelFileTextCompare` component, a React functional component that renders a file comparison view for text files. It takes a single prop, `inputType`, which is a type definition for the input data. The component fetches the contents and sizes of the files to be compared using the `opFileContents` and `opFileSize` functions from the `@wandb/weave/core` library. It then renders a `PanelFileTextCompareSizeGuard` component to check if the file sizes are within the limit (25MB) and a `PanelFileTextCompareContents` component to process the file contents for display. The differences between the two files are displayed using a `ReactDiffViewer` component.

Example usage:

```jsx
import PanelFileTextCompare from 'weave/components/PanelFileTextCompare';

const input = {
  file: [
    {path: 'file1.txt', type: 'file'},
    {path: 'file2.txt', type: 'file'},
  ],
};

<PanelFileTextCompare input={input} />;
```

`common.ts` defines an object called `inputType` that specifies the types of input accepted by the `weave` project. The `inputType` object is a union type, allowing multiple types of input. The `members` property is an array of objects, each specifying a different type of input that can be accepted. Each object in the `members` array specifies a `list` type, which means that it can accept a list of files with specific extensions.

Example usage:

```javascript
import { inputType } from 'weave';

// Validate user input
function validateInput(input) {
  if (inputType.members.some(member => {
    // Check if input matches any of the specified types
    return member.type === 'list' && input.every(file => {
      return file.type === 'file' && file.extension === member.objectType.extension;
    });
  })) {
    return true;
  } else {
    return false;
  }
}
```

`index.ts` defines a `Spec` object that specifies the properties of a panel in the `weave` project. The `Spec` object has four properties: `id`, `displayName`, `Component`, and `inputType`. The `id` is a unique identifier for the panel, the `displayName` is the name shown in the user interface, the `Component` is a React component used to render the panel, and the `inputType` specifies the type of input that the panel expects.

Example usage:

```javascript
import { Spec } from 'weave/panel/textdiff';

const myPanel = {
  ...Spec,
  displayName: 'My File Diff Panel',
  inputType: {
    type: 'file',
    multiple: true,
  },
};

// Use myPanel in the project
```

In summary, the `PanelFileTextDiff` folder contains code for a component that enables users to compare and highlight differences between two text files in the `weave` project. The component is defined in `Component.tsx`, the input types are specified in `common.ts`, and the panel properties are defined in `index.ts`.
