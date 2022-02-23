import React from 'react';
import Component1 from './components/Component1';

import './App.css';

const App = () => {
  const name = 'Fred';
  const age = 12;
  const email = 'fred@fred.com';

  return (
    <main>
      <h1>Welcome to React</h1>
      <Component1 name={name} age={age} email={email} />
    </main>
  );
};

export default App;
