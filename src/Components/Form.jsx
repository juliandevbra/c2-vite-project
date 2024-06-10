import { useState } from "react";
import Envio from "./Envio";
import Button from "./Button";

const Form = () => {
  const [cliente, setCliente] = useState({
    nombre: "",
    direccion: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (event) =>
    setCliente({ ...cliente, nombre: event.target.value });
  const handleDireccion = (e) =>
    setCliente({ ...cliente, direccion: e.target.value });

  const handleSumbit = (e) => {
    e.preventDefault();
    if (
      cliente.nombre.trim().length > 3 &&
      cliente.direccion.trim().length > 5 &&
      cliente.direccion.includes(" ")
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <label>Nombre</label>
        <input type="text" value={cliente.nombre} onChange={handleName} />
        <label>Dirección</label>
        <input
          type="text"
          value={cliente.direccion}
          onChange={handleDireccion}
        />
        <Button>Enviar</Button>
      </form>
      {/* Operación ternaria: 
        {condicion ? true : false} Reemplazo de if else
      */}
      {/* Operación ternaria simplificada:
        {condicion && true} Reemplazo de if solito
      */}
      {show && <Envio cliente={cliente} />}
      {error && (
        <p style={{ color: "red" }}>
          Debe colocar la información correctamente
        </p>
      )}
    </>
  );
};

export default Form;
