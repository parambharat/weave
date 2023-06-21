[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/components/Panel2/PanelPlotly)

The `PanelPlotly` component in the `weave-js` project is a React functional component that renders a Plotly chart within a Weave panel. It expects a `PanelPlotlyProps` object as a prop, which contains an `updateConfig2` function and an `input` object of type `Plotly`. The `updateConfig2` function is used to update the configuration of the Weave panel, while the `input` object contains the data and layout for the Plotly chart.

The component first checks if `updateConfig2` is not null and throws an error if it is. It then memoizes the JSON string representation of the Plotly chart data using the `useMemo` hook and the `callOpVeryUnsafe` function from the `@wandb/weave/core` library. The component creates a reference to a `div` element using the `useRef` hook, which will be used to render the Plotly chart. It also retrieves the result of the memoized JSON string using the `useNodeValue` hook from the `../../../react` module.

If the `loading` property of the result is true, the component returns early and does not render anything. Otherwise, it parses the JSON string into a `plotlySpec` object and uses the `Plotly.newPlot` function to render the chart in the `div` element. It also attaches event listeners to the `div` element for the `plotly_click` and `plotly_selected` events, which are used to update the `selected` property of the `PanelPlotlyConfig` object passed to `updateConfig2`.

The component returns a `div` element with a `data-test-weave-id` attribute set to `"PanelPlotly"` and a `style` object with `width` and `height` properties set to `"100%"`. The `ref` attribute of the `div` element is set to the `divRef` object created using the `useRef` hook. This `div` element is where the Plotly chart will be rendered.

Example usage:

```jsx
import {PanelPlotly} from 'weave/panel/plotly';

const MyPanel = () => {
  const [config, setConfig] = useState({selected: null});

  const handleUpdateConfig = useCallback((newConfig) => {
    setConfig((oldConfig) => ({...oldConfig, ...newConfig}));
  }, []);

  return (
    <PanelPlotly
      input={{type: 'Plotly', data: [...], layout: {...}}}
      updateConfig2={handleUpdateConfig}
      config={config}
    />
  );
};
```

The `common.ts` file defines a constant variable called `inputType` that is exported for use in other parts of the project. This variable is used to specify the type of input data that the project can handle, in this case, Plotly charts.

The `index.ts` file exports a constant object called `Spec` of type `Panel2.PanelSpec`, which defines the specifications for the `PanelPlotly` component in the larger project. The `Spec` object has three properties: `id`, `Component`, and `inputType`. The `id` property identifies the panel component as `PanelPlotly`, the `Component` property is a lazily loaded React component imported from the `./Component` module, and the `inputType` property is imported from the `./common` module to specify the expected input type.

Example usage:

```jsx
import { Spec } from 'weave/panel-plotly';

// Render the PanelPlotly component with the specified input type
<Spec.Component inputType={Spec.inputType} />
```
