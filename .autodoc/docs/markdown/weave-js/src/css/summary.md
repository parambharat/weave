[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/css)

The `ControlBox.less` file is a LESS stylesheet that contributes to the styling of the control box popup and picker components within the Weave project. This file contains two main classes: `.ui.popup.control-box-popup` and `.control-box-picker`.

The `.ui.popup.control-box-popup` class is responsible for the styling of the control box popup. It has a nested `.ui.buttons` class that sets the margin to 0 pixels, ensuring proper alignment of the buttons within the popup. This class is essential for maintaining a consistent appearance of the control box popup throughout the application.

For instance, a developer can apply the `.ui.popup.control-box-popup` class to an HTML element like this:

```html
<div class="ui popup control-box-popup">
  <div class="ui buttons">
    <button>Button 1</button>
    <button>Button 2</button>
  </div>
</div>
```

This code snippet creates a control box popup with two buttons, styled according to the `.ui.popup.control-box-popup` class.

The `.control-box-picker` class defines the styling for the control box picker component. It sets the cursor to a pointer, indicating that the element is clickable, and sets the color to a gray shade defined by the `@gray700` variable. This class ensures a consistent look and feel for the control box picker across the application.

To use the control box picker, a developer could add the following HTML code:

```html
<div class="control-box-picker">
  <span>Click me!</span>
</div>
```

This code creates a clickable element with the text "Click me!" that is styled according to the `.control-box-picker` class.

In summary, the `ControlBox.less` file is a crucial part of the Weave project's user interface, as it ensures consistent styling for the control box popup and picker components. Developers can easily apply these styles to their HTML code by using the provided classes, resulting in a cohesive and polished appearance throughout the application.
