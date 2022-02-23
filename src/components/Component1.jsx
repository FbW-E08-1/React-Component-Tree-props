import Component2 from './Component2';

const Component1 = ({ name, age, email }) => {
  return (
    <div>
      <h2>I am component one</h2>
      <Component2 name={name} age={age} email={email} />
    </div>
  );
};

export default Component1;
