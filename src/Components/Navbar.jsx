import '../Styles/Navbar.css'

const Navbar = () => {
    const titulos = ['Inicio', 'Productos', 'Contacto']

    // const titulosMap = titulos.map((titulo, index) => {
    //  return <h4>{titulo}</h4>
    // })
    console.log(titulos)
    // console.log(titulosMap)
  return (
    <div className='navbar'>
        {/* <h4>Inicio</h4>
        <h4>Productos</h4>
        <h4>Contacto</h4> */}

        {titulos.map((titulo, index) => <h4 key={index}>{titulo}</h4>)}
    </div>
  )
}

export default Navbar