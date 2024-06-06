import React, { useState } from "react";

const Contact = ({ onClick }) => {
  const [estado, setEstado] = useState("");
  return (
    <div>
      <h1>Envianos tu consulta</h1>
      <input type="email" role="email" />
      <input
        type="text"
        data-testid="consulta"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
      />
      <button onClick={onClick}>Enviar</button>
    </div>
  );
};

export default Contact;
