import React, { useState } from "react";

const CounterComponent = (props) => {
  const [count, setCount] = useState(0);
  //   const [value, setValue] = useState("Amit");
  //   console.log(val);

  return (
    <div>
      <p>Counter Component : {count}</p>
      <h6>Number is {count % 2 === 0 ? "Even" : "Odd"}</h6>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        {props.text}
      </button>
      <button className="counter-button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};
export default CounterComponent;
