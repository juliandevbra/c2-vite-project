import React, { useEffect, useState } from "react";

const FuncComponent = () => {
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState({});
  console.log("La parte funcional");

  // useEffect(funcion, dependencias)
  // useEffect para cuando se monta el componente
  useEffect(() => {
    console.log("Se ejecuta solamente en el montaje");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // useEffect para cuando se actualiza alguna dependencia
  useEffect(() => {
    console.log("Se ejecuta cuando se monta y cuando se actualiza loading");
    if (!loading) {
      setUsuario({
        nombre: "Pablo",
      });
    }
  }, [loading]);

  // useEffect para cuando se desmonta el componente
  useEffect(() => {
    return () => {
      console.log("Se ejecuta cuando se desmonta el componente");
    };
  }, []);

  console.log(usuario);
  return (
    <div>
      {loading ? (
        "Cargando..."
      ) : (
        <>
          <h3>Hola, {usuario.nombre}!</h3>
        </>
      )}
    </div>
  );
};

export default FuncComponent;
