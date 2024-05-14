import "../Styles/Navbar.css";

const Navbar = () => {
  const titulos = ["Inicio", "Productos", "Contacto"];
  return (
    <div className="navbar">
      {titulos.map((titulo, index) => (
        <h4 key={index}>{titulo}</h4>
      ))}
    </div>
  );
};

export default Navbar;
