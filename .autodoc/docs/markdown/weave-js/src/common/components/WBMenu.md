[View code on GitHub](https://github.com/wandb/weave/weave-js/src/common/components/WBMenu.tsx)

The `weave` project contains a file called `WBMenu`. This file exports a React component called `WBMenu` that is used to render a menu of options. The component takes in a number of props, including `options`, which is an array of objects representing the menu options. Each option object has a `value` property, which is a string or number representing the value of the option, and an optional `name` property, which is a string representing the display name of the option. The `WBMenu` component also takes in an optional `selected` prop, which is the currently selected option, and an optional `onSelect` prop, which is a function that is called when an option is selected.

The `WBMenu` component renders the menu options as a list of items. Each item is rendered using the `optionRenderer` prop, which is a function that takes in an object representing the option and returns a React node. If `optionRenderer` is not provided, a default renderer is used that displays the option's name and an icon indicating whether the option is selected.

The `WBMenu` component also handles keyboard navigation of the menu options. When the user presses the up or down arrow keys, the component highlights the previous or next option, respectively. When the user presses the enter key, the component calls the `onSelect` function with the value of the currently highlighted option.

Overall, the `WBMenu` component provides a flexible and customizable way to render a menu of options and handle user interaction with the menu. It can be used in a variety of contexts, such as dropdown menus or autocomplete inputs. Here is an example of how the `WBMenu` component might be used:

```jsx
import {WBMenu} from 'weave';

const options = [
  {name: 'Option 1', value: 'option1'},
  {name: 'Option 2', value: 'option2'},
  {name: 'Option 3', value: 'option3'},
];

function MyComponent() {
  const [selected, setSelected] = useState(null);

  function handleSelect(value) {
    setSelected(value);
  }

  return (
    <div>
      <p>Selected option: {selected}</p>
      <WBMenu options={options} selected={selected} onSelect={handleSelect} />
    </div>
  );
}
```
## Questions: 
 1. What is the purpose of the `getOptionDisplayName` function?
- The `getOptionDisplayName` function returns the name of a `WBMenuOption` object if it exists, otherwise it returns the value of the object.

2. What is the purpose of the `scrollIntoView` function?
- The `scrollIntoView` function scrolls the element into view if it is not already visible on the screen.

3. What is the purpose of the `highlighted` prop in the `WBMenu` component?
- The `highlighted` prop is used to indicate which `WBMenuOption` object is currently highlighted, and is used to determine which option is selected when the user presses the enter key.