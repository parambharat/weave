[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/components/Panel2/PanelBokeh)

The `PanelBokeh` folder contains code for a React component that renders a Bokeh plot within a larger project, likely involving various data visualizations. The folder consists of three files: `Component.tsx`, `common.ts`, and `index.ts`.

`Component.tsx` defines a React functional component called `PanelBokeh` that takes a single prop, `input`, of type `inputType` defined in `common.ts`. The component uses the `useAssetContentFromArtifact` hook to retrieve the contents of the `inputNode` artifact. If the contents are still loading, the component returns an empty `div`. Otherwise, the contents are parsed as JSON and passed as a prop to the `BokehViewer` component. Example usage:

```javascript
import PanelBokeh from './PanelBokeh';

const MyComponent = () => {
  const input = {
    artifactId: 'my-bokeh-plot',
    version: '1.0.0'
  };

  return (
    <div>
      <h1>My Bokeh Plot</h1>
      <PanelBokeh input={input} />
    </div>
  );
};
```

`common.ts` exports a constant variable called `inputType` with a single property `type` set to `'bokeh-file'`. This code is used to define the type of input that the project can accept, specifically Bokeh files. It can be used in other parts of the project to ensure that the input being provided is of the correct type. Example usage:

```javascript
import { inputType } from 'weave';

function processInput(input: any) {
  if (input.type === inputType.type) {
    // input is a valid Bokeh file, proceed with processing
  } else {
    // input is not a valid Bokeh file, handle error
  }
}
```

`index.ts` exports a constant object called `Spec` of type `Panel2.PanelSpec` with four properties: `id`, `displayName`, `Component`, and `inputType`. The `id` and `displayName` properties are strings identifying and naming the panel, respectively. The `Component` property is a React component created using `React.lazy()`, allowing for lazy loading. The `inputType` property is imported from `./common`. The `Spec` object is likely used by a panel manager or router to dynamically render the appropriate panel based on user input or other factors. Example usage:

```javascript
import { Spec } from 'weave/bokeh';

// Render the Bokeh panel
function renderBokehPanel() {
  const { Component } = Spec;
  return (
    <div>
      <h1>{Spec.displayName}</h1>
      <Component />
    </div>
  );
}
```

In summary, the `PanelBokeh` folder contains code for a React component that renders Bokeh plots within a larger project. The code enforces the expected input type and allows for dynamic rendering of the panel based on user input or other factors.
