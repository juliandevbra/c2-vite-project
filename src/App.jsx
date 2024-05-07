import './App.css'
import Button from './Components/Button'
// import Pepito, {OtroEjemplo} from './Components/Ejemplo'
import Estudiante from './Components/Estudiante'

function App() {

  const borrar = () => {
    console.log('Se borró el elemento')
  }
  const cancelar = () => {
    console.log('Se canceló la operación')
  }
  const aceptar = () => {
    console.log('Se aceptaron los terminos y condiciones')
  }


  return (
    <>
        <h1>Bienvenidos a FRONTEND III</h1>
        {/* <Pepito/>
        <OtroEjemplo/> */}
        <Estudiante nombre='Joaquin' materia='Infraestructura II' color='verde'/>
        <Estudiante nombre='Jero' materia='Frontend III' color='rojo'/>
        <Estudiante nombre='Franceso' materia='Backend' color='plateado'/>
        <Button texto='Cancelar' funcion={cancelar}/>
        <Button texto='Borrar' funcion={borrar}/>
        <Button texto='Aceptar' funcion={aceptar}/>
        {/* Faltó ejemplo de children */}
    </>
  )
}

export default App
