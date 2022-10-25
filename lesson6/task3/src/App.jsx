import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Weather from './weather/Weather';

const App = () => {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
};

export default App;
