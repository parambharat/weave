[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/components)

The `weave-js/src/components` folder contains various reusable React components and utility functions that can be used throughout the Weave project. These components are designed to provide consistent styling and functionality across different parts of the application.

1. **IconButton.tsx**: This file defines a styled `IconButton` component that can be used to create clickable icons with customizable size. It can be used in various parts of the project, such as toolbars, to provide users with a set of actions they can perform. Example usage:

   ```jsx
   import React from 'react';
   import { IconButton } from 'weave';

   const MyComponent = () => {
     return (
       <div>
         <IconButton>
           <svg>...</svg>
         </IconButton>
         <IconButton small>
           <svg>...</svg>
         </IconButton>
       </div>
     );
   };
   ```

2. **PagePanel.tsx**: This file contains the `PagePanel` component, responsible for rendering the main content area of the Weave project. It handles the loading and display of different types of panels and provides additional controls for Jupyter Notebook users. The `PageContent` component renders the actual content, while the `JupyterPageControls` component provides Jupyter-specific controls.

3. **Tooltip.tsx**: This file defines a styled `Tooltip` component that can be used throughout the project to provide customizable tooltips. Example usage:

   ```jsx
   import React from 'react';
   import { Button } from 'semantic-ui-react';
   import { Tooltip } from './path/to/Tooltip';

   const MyButton = () => {
     return (
       <Tooltip content='Click me for more information'>
         <Button>Learn More</Button>
       </Tooltip>
     );
   };
   ```

4. **ValidatingTextInput.tsx**: This file defines a `ValidatingTextInput` component that renders an input field with validation capabilities. It can be used in a larger project to render input fields that require validation. Example usage:

   ```jsx
   import { ValidatingTextInput } from 'weave';

   const MyComponent = () => {
     const validateInput = (value) => value.length > 0;
     const onCommit = (newValue) => console.log(`New value: ${newValue}`);

     return (
       <ValidatingTextInput
         dataTest="my-input"
         validateInput={validateInput}
         onCommit={onCommit}
         initialValue="Hello, world!"
       />
     );
   };
   ```

5. **automation.ts**: This file contains code that enables automation of certain tasks in the project. It exports two functions: `useWeaveAutomation` and `onAppError`. The `useWeaveAutomation` hook can be used to automate tasks by fetching commands from a server and executing them using the `eval` function. The `onAppError` function sends error status updates to the server in case of errors.
