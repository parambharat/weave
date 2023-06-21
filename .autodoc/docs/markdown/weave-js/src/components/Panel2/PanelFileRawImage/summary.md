[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/components/Panel2/PanelFileRawImage)

The `PanelFileRawImage` folder contains code for a React component called `PanelPreviewImage` and related constants. This component is responsible for rendering an image preview of a file input in a panel within the larger `weave` project.

The `PanelPreviewImage` component is defined in the `Component.tsx` file. It takes a single prop `input` of type `Node`, which is imported from the `@wandb/weave/core` module. The component uses the `opFileDirectUrl` function to get the direct URL of the file and the `LLReact.useNodeValue` hook to get the value of the `directUrlNode`. The component then renders an `img` element with the `src` attribute set to the `result` property of the `directUrlValue` object.

```jsx
import React from 'react';
import PanelPreviewImage from './PanelPreviewImage';

const MyComponent = () => {
  const fileNode = // get file node from data flow graph
  return (
    <div>
      <h1>Image Preview</h1>
      <PanelPreviewImage input={fileNode} />
    </div>
  );
};
```

The `common.ts` file defines two constants, `IMAGE_FILE_EXTENSIONS` and `inputType`, which are used throughout the project to validate and filter image files based on their file extension and to define the expected input type for functions or methods that require an image file as input.

```javascript
function processImageFile(file: { type: string, extension: string }) {
  if (file.type !== 'file') {
    throw new Error('Invalid input type. Expected file.');
  }
  if (!IMAGE_FILE_EXTENSIONS.includes(file.extension)) {
    throw new Error('Invalid file extension. Expected one of: ' + IMAGE_FILE_EXTENSIONS.join(', '));
  }
  // process the image file
}
```

The `index.ts` file exports a constant called `Spec`, which defines the specifications for a panel that displays raw images in the larger project. The panel is identified by the `id` property with a value of `'rawimage'` and has a user-friendly name of `'Image'`. The `Component` property is a lazily loaded React component, and the `inputType` property specifies the type of input that the panel expects.

```javascript
import { Spec } from 'weave/panels/rawimage';

// create a new panel using the specifications defined in Spec
const panel = new Panel(Spec);

// render the panel
panel.render();
```

In summary, the `PanelFileRawImage` folder contains code for a React component that displays an image preview in a panel, along with related constants and specifications. This component is used in the larger `weave` project to create and render panels that display raw images.
