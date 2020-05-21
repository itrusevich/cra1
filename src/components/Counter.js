import React, { useState } from 'react';
import '../App.css';

function Counter(props) {

  const [count, setCount] = useState(props.initialValue)

  const countChangePlusHandler = () => {
    setCount(count + 1);


    props.countChanges(count + 1);
  }

  const countChangeMinusHandler = () => {
    setCount(count - 1);
    props.countChanges(count - 1);
  }

  return (
    <div>
      <button onClick={countChangeMinusHandler}>-</button>
      {count}
      <button onClick={countChangePlusHandler}>+</button>
    </div>

  );

}

export default Counter;