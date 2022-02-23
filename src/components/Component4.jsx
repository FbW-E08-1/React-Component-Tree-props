import React from 'react';
import Component5 from './Component5';

const Component4 = ({ email }) => {
  return (
    <div>
      <h2>I am component four</h2>
      <Component5 email={email} />
    </div>
  );
};

export default Component4;
