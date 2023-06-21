[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/actions)

The code in the `actions` folder of the `weave-js` project is responsible for managing and rendering actions that can be performed on nodes within the Weave data visualization library. The folder contains four files: `context.tsx`, `index.ts`, `menu.tsx`, and `types.ts`.

`context.tsx` defines a context and a context provider for managing a list of `NodeAction` objects in a React application. The `WeaveActionsContext` constant is a React context created using the `createContext` method from the React library. The `useWeaveActionContext` function is a custom hook that returns the current value of the `WeaveActionsContext`. The `WeaveActionContextProvider` component is a React functional component that takes two props: `newActions` and `children`. This code allows components to access and modify the list of actions without having to pass them down through props.

Example usage:

```javascript
// Within a component that needs to access the actions context:
import { useWeaveActionContext } from './weave';

const MyComponent = () => {
  const { actions } = useWeaveActionContext();

  // Do something with the actions array...

  return (
    // JSX for the component...
  );
};

// Within a component that needs to modify the actions context:
import { WeaveActionContextProvider } from './weave';

const MyOtherComponent = () => {
  const newActions = [/* Array of new NodeAction objects */];

  return (
    <WeaveActionContextProvider newActions={newActions}>
      {/* Child components that need access to the updated actions context */}
    </WeaveActionContextProvider>
  );
};
```

`index.ts` exports all the modules from three different files located in the `weave` project: `context`, `menu`, and `types`. This allows for easy sharing and use of functionality across different parts of the application.

`menu.tsx` is responsible for rendering a context menu that appears when a user right-clicks on a data node in the visualization. The `ActionsTrigger` component is the entry point for the context menu, and the `ActionsContent` component is responsible for rendering the context menu. The code uses the `useWeaveContext` hook to get access to the `weave` object and the `useEffect` hook to asynchronously resolve the labels and descriptions for each action in the `actions` prop.

`types.ts` defines interfaces and types related to actions that can be performed on nodes in the Weave project. The `NodeAction` interface defines the properties of an action that can be performed on a node, and the `WeaveActionsContextState` interface defines the state of the actions context.

Overall, the code in the `actions` folder provides a flexible and extensible system for managing and rendering actions that can be performed on nodes within the Weave data visualization library.
