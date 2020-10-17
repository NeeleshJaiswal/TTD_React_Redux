import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-text">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      {count<=0 && <h3 data-test="error" style={{color: "red"}}>
        The counter cannot go below 0
      </h3>}
      <button
        data-test="button-component"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Counter
      </button>
      <button data-test="decrement-button" onClick={() => {count>0 && setCount(count - 1)}}>
        Decrement Counter
      </button>
    </div>
  );
}

export default App;
