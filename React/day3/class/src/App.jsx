import React, { useState } from "react";

const App = () => {
  let [count, setCount] = useState(20);
  console.log("rendering...");
  console.log(count);

  let handleClick = () => {
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <h1>Hello day 2</h1>
      <h2>count - {count}</h2>
      <h2>age</h2>

      <button onClick={handleClick}>Increment</button>
      <button onClick={() => setCount(21)}>inc</button>
    </div>
  );
};

export default App;
