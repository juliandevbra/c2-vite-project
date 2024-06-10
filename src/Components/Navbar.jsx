import { Link, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";
import { routes } from "../utils/routes";
import Button from "./Button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Button handleClick={() => navigate(-1)}>🔙</Button>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.contact}>
        <h4>Contacto</h4>
      </Link>
      <Link to={routes.cart}>
        <h4>Cart 🛒</h4>
      </Link>
    </div>
  );
};

export default Navbar;
