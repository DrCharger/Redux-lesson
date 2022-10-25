import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import UsersList from './users/UsersList';

const App = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};

export default App;
