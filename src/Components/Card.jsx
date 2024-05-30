import CardStyles from "../Styles/Card.module.css";
import Counter from "./Counter";

const Card = ({ item, setCart }) => {
  const { image, title, pricePerServing } = item;
  return (
    <div className={CardStyles.cardContainer}>
      <img src={image} alt={title} className={CardStyles.cardImg} />
      <h4>{title}</h4>
      <h4>${pricePerServing}</h4>
      <Counter />
      <button onClick={() => setCart((prevState) => [...prevState, item])}>
        🛒
      </button>
    </div>
  );
};

export default Card;
