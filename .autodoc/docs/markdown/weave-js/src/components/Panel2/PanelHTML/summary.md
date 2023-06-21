[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/components/Panel2/PanelHTML)

The `PanelHTML` component in the `Component.tsx` file is responsible for rendering an HTML file within an iframe in the Weave project. It utilizes the `WandbLoader` component to display a loading spinner while the HTML file is being loaded and the `useAssetURLFromArtifact` hook to obtain the URL of the HTML file. The component can be used in the larger Weave project to display HTML files stored in the project's artifacts by passing an `inputNode` object containing the path to the HTML file.

The `common.ts` file defines a constant variable `inputType` that specifies the input type for the Weave project as an HTML file. This information can be used by other parts of the project to ensure that the input is properly validated and processed. For example:

```typescript
import { inputType } from 'weave';

function processInput(input: any) {
  if (input.type === inputType.type) {
    // input is an HTML file, proceed with processing
  } else {
    // input is not of the correct type, handle error
  }
}
```

The `index.ts` file defines a panel specification for displaying HTML files in the Weave project, named `Spec`. The `Spec` object has properties such as `id`, `displayName`, `Component`, `inputType`, and `canFullscreen`. The `Component` property is a React component that renders the HTML file, imported from the `./Component` file and defined using the `React.lazy()` function for lazy loading. The `inputType` property is imported from the `./common` file.

The `Spec` object can be used by other parts of the project to create instances of the HTML panel. For example:

```typescript
import {PanelManager} from 'weave';

const panelManager = new PanelManager();
const htmlPanel = panelManager.createPanel('html-file');
```

This code creates a new instance of the `PanelManager` class and then uses it to create a new instance of the HTML panel by passing the `'html-file'` ID to the `createPanel()` method. The resulting `htmlPanel` object can then be used to display HTML files in the application.
