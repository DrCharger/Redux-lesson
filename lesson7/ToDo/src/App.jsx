import React from 'react';
import TasksList from './tasks/components/TasksList';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <h1 className="title">Todo List</h1>
      <TasksList />
    </Provider>
  );
};
export default App;
