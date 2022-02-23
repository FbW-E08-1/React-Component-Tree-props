import React from 'react';
import Component4 from './Component4';

const Component3 = ({ age, email }) => {
  return (
    <div>
      <h2>I am component three and I have received data from component two</h2>
      <p>Age:- {age}</p>
      <Component4 email={email} />
    </div>
  );
};

export default Component3;
