import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Counter from './Counter';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
