import React from "react";
import lobo from "./lobo.png";
import { useRecipeStates } from "../Context/Context";

const LoboEstepario = () => {
  const { salario } = useRecipeStates();
  console.log("Se renderizó componente lobo");
  return (
    <div className="lobo-estepario">
      <img className="lobo" src={lobo} alt="lobo" />
      <h3>Total: {salario * 6}</h3>
    </div>
  );
};

export default LoboEstepario;
