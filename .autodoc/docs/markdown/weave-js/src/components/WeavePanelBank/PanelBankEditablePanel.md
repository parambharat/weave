[View code on GitHub](https://github.com/wandb/weave/weave-js/src/components/WeavePanelBank/PanelBankEditablePanel.less)

The code in this file defines the styles for an editable panel component in the Weave project. The purpose of this component is to allow users to interact with and modify various types of data visualizations. The component is designed to be highly customizable and flexible, with a variety of options for resizing, dragging, and editing the content.

The code defines a number of CSS classes that can be used to style the panel. These include classes for the panel itself, as well as classes for various elements within the panel, such as the draggable handle and the panel actions. The code also includes some basic styles for the panel header and panel controls.

One of the key features of the editable panel is its ability to be resized and dragged around the screen. The code includes styles for a resizable handle and a draggable handle, which allow users to adjust the size and position of the panel as needed. The code also includes styles for highlighting and selecting the panel, which can be useful for indicating which panel is currently active or selected.

Overall, the editable panel component is a key part of the Weave project, providing users with a powerful and flexible tool for working with data visualizations. By allowing users to customize and interact with the content in a variety of ways, the editable panel helps to make the Weave project more accessible and user-friendly. 

Example usage:

```jsx
import React from 'react';
import { EditablePanel } from '@wandb/weave';

const MyPanel = () => {
  return (
    <EditablePanel>
      <div>My panel content goes here</div>
    </EditablePanel>
  );
};
```
## Questions: 
 1. What is the purpose of the `weave-root` class?
- The `weave-root` class is used to scope the styles to the `weave` project and prevent conflicts with W&B PanelBank styles.

2. What is the purpose of the `.draggable-handle` class?
- The `.draggable-handle` class is used to define the styling and behavior of the handle that allows the panel to be dragged and moved.

3. What is the purpose of the `.panel-selected` class?
- The `.panel-selected` class is used to define the styling of a panel when it is selected, specifically by adding a border with the color of `@primaryText`.