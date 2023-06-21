[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/components/Panel2/PanelRunsTable)

The `PanelRunsTable` component in `index.tsx` is a part of the `weave-js` project and is responsible for displaying tables of data from runs in a data science project. It is a functional React component that takes in a list of dictionaries, where each dictionary represents a run, and displays a table of data for each run. The component also provides a dropdown menu for users to select which table to display.

The component accepts two props: `inputType` and `PanelRunsTableConfigType`. The `inputType` is an object that specifies the type of input data the component expects, while `PanelRunsTableConfigType` is an object containing configuration options for the component.

The `PanelRunsTableConfig` component, also defined in this file, is responsible for rendering the dropdown menu that allows users to select which table to display. It takes in the same props as the `PanelRunsTable` component and uses the `useNodeWithServerType` hook to fetch the data for the dropdown menu.

The `Spec` object contains metadata about the `PanelRunsTable` component, such as its `id`, `displayName`, and `inputType`. It also includes a function called `equivalentTransform` that transforms the input data into the output data displayed in the table. This function utilizes the `opRunSummary` and `opPick` functions to extract the data for the selected table from the input data.

The `Panel2.registerPanelFunction` function is called to register the `PanelRunsTable` component with the `Panel2` module, enabling its use in other parts of the `weave` project.

Here's an example of how the `PanelRunsTable` component might be used:

```jsx
import { PanelRunsTable } from 'weave';

const runs = [
  { id: 1, name: 'Run 1', data: { table1: [], table2: [] } },
  { id: 2, name: 'Run 2', data: { table1: [], table2: [] } },
];

const App = () => {
  return (
    <div>
      <PanelRunsTable input={runs} />
    </div>
  );
};
```

In this example, the `PanelRunsTable` component is imported from the `weave` package and used in the `App` component. The `runs` array contains two runs, each with an `id`, `name`, and `data` object containing two tables. The `PanelRunsTable` component is then used to display the data from these runs in a table format, with a dropdown menu for selecting the desired table.
