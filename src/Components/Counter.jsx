import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const restar = () => {
    setCounter(counter - 1);
  };
  const sumar = () => {
    setCounter((prev) => {
      console.log("El valor de prev es: ", prev);
      return prev + 1;
    });
  };

  return (
    <div className="counter">
      <button onClick={restar} disabled={counter === 0}>
        -
      </button>
      <h4>{counter}</h4>
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default Counter;
