import { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(50);
  },[]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter +</button>
      <button onClick={() => setCounter(counter - 1)}>Counter -</button>
    </div>
  );
};

export default Counter;
