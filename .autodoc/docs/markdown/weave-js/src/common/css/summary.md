[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/common/css)

The `.autodoc/docs/json/weave-js/src/common/css` folder contains various Less and CSS files that define the styling for different components and elements in the Weave project. These files ensure a consistent look and feel across the project by providing reusable styles and mixins.

For example, the `DragDrop.less` file defines the `.drag-drop-handle` class, which changes the cursor to a hand icon when hovering over an element, indicating that it can be dragged and dropped. This class can be used in conjunction with JavaScript code to handle drag and drop events:

```html
<div class="drag-drop-handle">
  Drag me!
</div>
```

```css
@import './DragDrop.less';
```

```javascript
const draggable = document.querySelector('.drag-drop-handle');

draggable.addEventListener('dragstart', (event) => {
  // Code to handle drag start event
});

draggable.addEventListener('dragend', (event) => {
  // Code to handle drag end event
});
```

The `EditableField.less` file defines the `.editable-field` class, which uses the `editable-field-mixin()` mixin to style editable fields consistently across the project:

```html
<div class="editable-field">
  This text is editable.
</div>
```

The `IFrameResets.less` file provides classes to control the visibility and positioning of elements when displayed within an iframe:

```html
<div class="hide-in-iframe">This element will be hidden in an iframe</div>
<div class="show-in-iframe">This element will only be displayed in an iframe</div>
```

The `Markdown.less` file defines styling for markdown content, ensuring a consistent appearance across the project:

```html
<div class="markdown">
  <h1>My Markdown File</h1>
  <p>This is some text in my markdown file.</p>
</div>
```

The `NumberInput.less` file provides styles for a number input component with stepper buttons:

```html
<div class="number-input">
  <div class="number-input__container">
    <div class="number-input__stepper">
      <button>+</button>
      <button>-</button>
    </div>
    <input type="number" class="number-input__input">
  </div>
</div>
```

The `animations.less` file defines several CSS animations that can be applied to elements for visual effects:

```css
.my-element {
  animation: fade-in 1s;
}
```

Finally, the `globals.less` file contains global variables for styling, ensuring consistency across the project. These variables can be used in other files to reference colors, font sizes, and other visual properties.

In summary, the code in this folder provides a collection of reusable styles and mixins for various components and elements in the Weave project. By using these files, developers can ensure a consistent look and feel across the project and easily maintain and update the styling as needed.
