import React from 'react';
import Component3 from './Component3';

const Component2 = ({ name, age, email }) => {
  return (
    <div>
      <h2>
        I am component two and I am displaying data sent to me from component
        one
      </h2>
      <p>name:- {name}</p>
      <Component3 age={age} email={email} />
    </div>
  );
};

export default Component2;
