import React from "react";
import Form from "../Components/Form";
import { useRecipeStates } from "../Context/Context";
import Card from "../Components/Card";

const Cart = () => {
  const { cart } = useRecipeStates();
  return (
    <div>
      <h2>Recetas seleccionadas</h2>
      <div className="list-container">
        {cart.map((pedido) => (
          <Card key={pedido.id} item={pedido} />
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Cart;
