[View code on GitHub](https://github.com/wandb/weave/weave-js/src/common/components/Vega3/CustomPanelRenderer.tsx)

`CustomPanelRenderer` is a React component that renders a Vega visualization based on the provided `spec` (Vega specification) and `data`. It handles various user interactions, such as selecting a specific run or step, and provides options to download the visualization as SVG, PNG, or PDF.

The component accepts several props, including `spec`, `err`, `loading`, `slow`, `data`, `userSettings`, `customRunColors`, `panelExportRef`, `innerKey`, `showRunSelector`, `viewableRunOptions`, `viewedRun`, `showStepSelector`, `viewedStep`, `viewableStepOptions`, `panelConfig`, `signalListeners`, and `vegaRef`. These props control the appearance and behavior of the rendered visualization.

`CustomPanelRenderer` uses the `immer` library to create a new version of the `spec` with patches applied, such as injecting fields based on `userSettings`. It also uses the `react-measure` library to measure the dimensions of the container and resize the Vega view accordingly.

The component provides a run selector and a step selector, which are rendered using `WBSelect` and `SliderInput` components, respectively. These selectors allow users to filter the data displayed in the visualization based on the selected run or step.

The `onDownloadSVG`, `onDownloadPNG`, and `onDownloadPDF` functions handle downloading the visualization in different formats. They use the `vegaView.toImageURL()` method to generate the image URL and then trigger a download using a hidden anchor element.

Example usage of `CustomPanelRenderer`:

```jsx
<CustomPanelRenderer
  spec={visualizationSpec}
  data={data}
  userSettings={userSettings}
  panelExportRef={panelExportRef}
  showRunSelector={true}
  viewableRunOptions={runOptions}
  viewedRun={selectedRun}
  showStepSelector={true}
  viewedStep={selectedStep}
  viewableStepOptions={stepOptions}
  panelConfig={panelConfig}
  signalListeners={signalListeners}
  vegaRef={vegaRef}
/>
```

In the larger project, `CustomPanelRenderer` is used to render custom visualizations based on user-defined Vega specifications and data fetched from the backend.
## Questions: 
 1. **Question:** What is the purpose of the `CustomPanelRenderer` component in this code?
   **Answer:** The `CustomPanelRenderer` component is responsible for rendering a Vega visualization based on the provided `spec`, handling user interactions such as run and step selection, and managing the state of the visualization, including resizing, error handling, and data updates.

2. **Question:** How does the code handle the case when the Vega visualization has bindings (e.g., run selector, step selector)?
   **Answer:** The code checks if the visualization has bindings using the `specHasBindings` function, `showRunSelector`, and `showStepSelector` properties. If bindings are present, it creates portals for the run and step selectors using the `createRunSelectorPortal` and `createStepSelectorPortal` functions, and renders them inside the Vega bindings container.

3. **Question:** How does the code handle exporting the visualization as SVG, PNG, or PDF?
   **Answer:** The code provides three functions: `onDownloadSVG`, `onDownloadPNG`, and `onDownloadPDF`, which are responsible for generating the respective file formats using the `vegaView.toImageURL` method and then triggering a download using the `clickDownloadLink` function. These functions are assigned to the `panelExportRef` object, allowing them to be called from outside the component.