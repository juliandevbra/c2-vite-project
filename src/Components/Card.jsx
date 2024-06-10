import { Link } from "react-router-dom";
import CardStyles from "../Styles/Card.module.css";
import Counter from "./Counter";
import Button from "./Button";

const Card = ({ item, setCart }) => {
  const { image, title, pricePerServing } = item;
  return (
    <div className={CardStyles.cardContainer}>
      <Link to={"/detail/" + item.id}>
        <img src={image} alt={title} className={CardStyles.cardImg} />
        <h4>{title}</h4>
      </Link>
      <h4>${pricePerServing}</h4>
      <Counter />
      <Button handleClick={() => setCart((prevState) => [...prevState, item])}>
        🛒
      </Button>
    </div>
  );
};

export default Card;
