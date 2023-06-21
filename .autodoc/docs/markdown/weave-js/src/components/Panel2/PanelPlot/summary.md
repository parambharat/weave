[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/components/Panel2/PanelPlot)

The `RadioButtons.tsx` file in the `PanelPlot` folder provides a set of React components for rendering radio buttons that allow users to select a brush mode for a panel plot. The main component exported from this module is `PanelPlotRadioButtons`, which takes two props: `currentValue` and `setMode`. `currentValue` is a string representing the currently selected brush mode, while `setMode` is a function that updates the selected brush mode when called with a string argument.

The available brush modes are defined in the `BRUSH_MODES` constant, which is an array of two strings: `'zoom'` and `'select'`. The `PanelPlotRadioButtons` component renders a set of radio buttons, each corresponding to a different brush mode.

```jsx
<PanelPlotRadioButtons
  currentValue={currentBrushMode}
  setMode={setBrushMode}
/>
```

The `PanelPlotRadioButtons` component is composed of several other components, including `IconComponent` and `GroupComponent`. The `IconComponent` is a styled component that renders an icon for a single radio button. It takes four props: `isDarkMode`, `isActive`, `onClick`, and `name`. `isDarkMode` is a boolean indicating the current color scheme, `isActive` is a boolean indicating whether the current radio button is selected, `onClick` is a function called when the radio button is clicked, and `name` is a string specifying the icon's name.

The `IconComponent` is further composed of two styled components: `IconWrapper` and `Icon`. `IconWrapper` is a styled `div` that wraps the `Icon` component, providing a background color and hover effect. `Icon` is a styled `div` that renders the icon itself.

The `GroupComponent` is another styled component that renders a group of radio buttons. It takes one prop: `isDarkMode`, a boolean indicating the current color scheme. The `GroupComponent` is composed of several `IconComponent` components, one for each brush mode.

These reusable React components can be used in other components or pages that require radio buttons for selecting a brush mode in a panel plot. For example, they might be used in a dashboard that displays multiple panel plots, each with its own set of brush modes.

```jsx
import PanelPlotRadioButtons from './PanelPlot/RadioButtons';

function Dashboard() {
  const [currentBrushMode, setBrushMode] = useState('zoom');

  return (
    <div>
      <PanelPlotRadioButtons
        currentValue={currentBrushMode}
        setMode={setBrushMode}
      />
      {/* Render panel plots here */}
    </div>
  );
}
```

In summary, the `RadioButtons.tsx` file provides a set of components for rendering radio buttons that allow users to select a brush mode for a panel plot, making it a useful module for any part of the project that requires this functionality.
