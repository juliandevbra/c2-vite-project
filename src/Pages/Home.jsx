import { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { useRecipeStates } from "../Context/Context";

const titleStyle = {
  backgroundColor: "#ffda92",
  color: "firebrick",
  width: "20%",
  margin: "10px auto",
  borderRadius: "10px",
};

const Home = () => {
  const { state } = useRecipeStates();

  return (
    <div>
      <h1 style={titleStyle}>Lista de recetas</h1>
      <div className="list-container">
        {state.recipes.map((recipe) => (
          <Card item={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
