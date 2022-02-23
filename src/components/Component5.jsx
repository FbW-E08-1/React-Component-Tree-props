import React from 'react';

const Component5 = ({ email }) => {
  return (
    <div>
      <h2>
        I am component five and I am displaying data sent from App down through
        component 1,2,3,4
      </h2>
      <p>Email:- {email}</p>
    </div>
  );
};

export default Component5;
