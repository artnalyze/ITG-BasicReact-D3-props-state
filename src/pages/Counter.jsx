const Counter = () => {
  let counter = 0;

  const onChangeCounter = () => {
    counter = counter + 1;
    console.log(counter);
  }
  
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onChangeCounter}>Counter +</button>
      <button>Counter -</button>
    </div>
  );
};

export default Counter;
