[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/common)

The `common` folder in the `weave-js` project contains various files and subfolders that provide essential functionality, styling, and state management for the application. These components work together to ensure a consistent and efficient user experience throughout the project.

For instance, the `index.css` file sets up global CSS variables and basic styles for the entire page, making it easier to maintain a consistent visual style. An example usage of the global CSS variables is:

```css
.button {
  background-color: var(--primaryColor);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
```

The `assets` subfolder provides a custom font and various icon classes, as well as a spinner animation, that can be used throughout the project to enhance the user interface and improve the user experience. To use the "drag-handle" icon, one would simply add the class "icon-drag-handle" to an HTML element:

```html
<button class="icon-drag-handle">Drag</button>
```

The `containers` subfolder contains the container components that manage the state and logic of the application. The main `App` container component serves as the root component for the entire application, while other container components manage specific parts of the application. For example, a `UserContainer` component might be responsible for fetching user data and passing it down to a `UserList` presentational component:

```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import UserList from '../components/UserList';

class UserContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return <UserList users={this.props.users} />;
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = {
  fetchUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
```

The `css` subfolder contains various Less and CSS files that define the styling for different components and elements in the project. These files ensure a consistent look and feel across the project by providing reusable styles and mixins. For example, the `DragDrop.less` file defines the `.drag-drop-handle` class, which changes the cursor to a hand icon when hovering over an element, indicating that it can be dragged and dropped:

```html
<div class="drag-drop-handle">
  Drag me!
</div>
```

The `hooks` subfolder provides a custom React hook called `useLifecycleProfiling` that helps developers track the duration a component is mounted in a React application. This can be useful for identifying performance issues and monitoring the performance of different components:

```jsx
import { useLifecycleProfiling } from 'weave';

function MyComponent() {
  useLifecycleProfiling('my-component', (data) => {
    console.log(data);
  });

  return <div>Hello World</div>;
}
```

The `state` folder contains custom React hooks and utility functions that enhance the functionality and performance of the project. These hooks and functions can be used in conjunction with other components and modules within the project to create a more efficient and robust user experience.

Finally, the `types` folder provides a collection of interfaces and types that help maintain type safety and consistency throughout the `weave-js` project. These types can be used in various parts of the application to ensure that data structures are properly formatted and compatible with the expected formats and structures.
