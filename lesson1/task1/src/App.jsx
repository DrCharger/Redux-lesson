import React, { useState } from 'react';
import Clock from './Clock.jsx';
import './index.scss';

const App = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={toggle}>Toggle</button>
      <div>{visible && <Clock location="New York" offset={-5} />}</div>
      <div>{visible && <Clock location="Kyiv" offset={3} />}</div>
      <div>{visible && <Clock location="London" offset={0} />}</div>
    </>
  );
};

export default App;
