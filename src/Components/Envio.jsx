import React from "react";

const Envio = ({ cliente }) => {
  const { nombre, direccion } = cliente;
  return (
    <>
      <h3>Nombre: {nombre}</h3>
      <h3>Dirección: {direccion}</h3>
    </>
  );
};

export default Envio;
