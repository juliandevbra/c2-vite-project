import { Link, useLocation } from "react-router-dom";
import CardStyles from "../Styles/Card.module.css";
import Counter from "./Counter";
import Button from "./Button";
import { useRecipeStates } from "../Context/Context";

const Card = ({ item }) => {
  const { image, title, pricePerServing } = item;
  const { dispatch } = useRecipeStates();
  const location = useLocation();

  return (
    <div className={CardStyles.cardContainer}>
      <Link to={"/detail/" + item.id}>
        <img src={image} alt={title} className={CardStyles.cardImg} />
        <h4>{title}</h4>
      </Link>
      <h4>${pricePerServing}</h4>
      <Counter />
      {location.pathname == "/" ? (
        <Button
          // handleClick={() => setCart((prevState) => [...prevState, item])}
          handleClick={() => dispatch({ type: "ADD_CART", payload: item })}
        >
          🛒
        </Button>
      ) : (
        <Button
          // handleClick={() => setCart((prevState) => [...prevState, item])}
          handleClick={() =>
            dispatch({ type: "DELETE_CART", payload: item.id })
          }
        >
          ❌
        </Button>
      )}
    </div>
  );
};

export default Card;
