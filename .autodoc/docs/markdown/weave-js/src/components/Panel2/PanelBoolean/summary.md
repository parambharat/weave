[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/components/Panel2/PanelBoolean)

The `PanelBoolean` component in the `weave` project is a React functional component that renders a boolean value as a pill-shaped element in a panel. It is located in the `.autodoc/docs/json/weave-js/src/components/Panel2/PanelBoolean` folder. The component takes in a set of props that define the input type and other properties of the panel.

The `Component.tsx` file contains the main implementation of the `PanelBoolean` component. It uses the `useNodeValue` hook from the `CGReact` library to get the value of the input. Depending on the input value, the component returns a loading spinner, an empty container, or a pill-shaped element that is centered in the panel. The pill is colored green if the value is true and red if the value is false. The text inside the pill is either "True" or "False" depending on the value.

The `common.ts` file defines a constant variable called `inputType` that is used to specify the type of input that can be accepted by a function or method in the larger project. The `inputType` is an object that has two properties: `type` and `members`. The `type` property is a string that is set to `'union'`, and the `members` property is an array of strings that specifies the different types of input that can be accepted, in this case, `'none'` and `'boolean'`.

The `index.ts` file is a module that exports a constant called `Spec`. This constant is an object that contains information about a specific panel in the larger project. The purpose of this module is to provide a specification for a panel that deals with boolean input types. The `Spec` constant contains three properties: `id`, `Component`, and `inputType`.

Here is an example of how the `PanelBoolean` component can be used in a larger project:

```javascript
import React from 'react';
import PanelBoolean from './PanelBoolean';

const AgreementForm = () => {
  const [agreed, setAgreed] = React.useState(false);

  const handleAgreementChange = () => {
    setAgreed(!agreed);
  };

  return (
    <div>
      <h2>Agreement Form</h2>
      <PanelBoolean input={{value: agreed}} />
      <button onClick={handleAgreementChange}>
        {agreed ? 'Disagree' : 'Agree'}
      </button>
    </div>
  );
};

export default AgreementForm;
```

In this example, the `PanelBoolean` component is used to display the boolean value of the user's agreement to the terms and conditions. The `input` prop is passed in with the current value of `agreed`, which is initially set to `false`. The `handleAgreementChange` function is called when the user clicks the "Agree" or "Disagree" button, which toggles the value of `agreed`. The `PanelBoolean` component updates automatically to reflect the new value of `agreed`.
