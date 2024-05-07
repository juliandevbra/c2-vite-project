const Button = ({texto, funcion}) => {
  return (
    <button onClick={funcion}>{texto}</button>
  )
}

export default Button
