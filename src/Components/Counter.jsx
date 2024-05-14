import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  //   console.log(counter);
  //   let contador = 0;
  const restar = () => {
    // console.log(contador);
    // contador--;
    setCounter(counter - 1);
  };
  const sumar = () => {
    // console.log(contador);
    // contador++;
    //Otra forma de darle el valor al estado, es mediante un callback y traigo el valor del estado por parametro
    setCounter((prev) => {
      console.log("El valor de prev es: ", prev);
      return prev + 1;
    });
  };
  //   console.log(contador);
  return (
    <div>
      <button onClick={restar} disabled={counter === 0}>
        -
      </button>
      <h4>{counter}</h4>
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default Counter;
