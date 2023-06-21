[View code on GitHub](https://github.com/wandb/weave/.autodoc/docs/json/weave-js/src/common/containers)

The `common/containers` folder in the `weave-js` project contains the container components that are responsible for managing the state and logic of the application. These components are higher-order components that wrap around presentational components to provide them with the necessary data and actions. The folder structure is as follows:

```
common
└── containers
```

### Files

1. **`App.js`**: This file contains the main `App` container component that serves as the root component for the entire application. It is responsible for rendering the application's layout, handling global state, and managing the routing logic. The `App` component might be used in the main entry point of the application, like this:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './common/containers/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

2. **`SomeContainer.js`**: This file is a placeholder for other container components that might be added to the project. These container components would be responsible for managing the state and logic for specific parts of the application. For example, a `UserContainer` component might be responsible for fetching user data and passing it down to a `UserList` presentational component:

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

### Subfolders

There are no subfolders in the `common/containers` folder.

In summary, the `common/containers` folder contains the container components that manage the state and logic of the application. These components are responsible for connecting to the Redux store, fetching data, and passing it down to presentational components. The main `App` container component serves as the root component for the entire application, while other container components like `SomeContainer.js` (or any other container components added to the project) manage specific parts of the application.
