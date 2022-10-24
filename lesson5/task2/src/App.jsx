import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import TransferList from './options/TransferList';

const App = () => {
  return (
    <Provider store={store}>
      <TransferList />
    </Provider>
  );
};

export default App;
