import React from 'react';
import { useGlobalContext } from './GlobalState'; 
const Counter = () => {
  const { state, dispatch } = useGlobalContext();

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
