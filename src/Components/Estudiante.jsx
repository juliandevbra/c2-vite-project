const Estudiante = ({nombre, materia, color}) => {
    // console.log(nombre, materia)
  return (
    <>
        <h3>Nombre: {nombre}</h3>
        <h4>Materia: {materia}</h4>
        <h5>Color favorito: {color}</h5>
        <hr />
    </>
  )
}

export default Estudiante