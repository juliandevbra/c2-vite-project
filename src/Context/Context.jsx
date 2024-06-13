import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const RecipeStates = createContext();

//Declaramos el reducer
const reducer = (state, action) => {
  //Recibe por parametro el estado y lo que mandé desde el dispatch (action)
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] }; //[...prevState, item] <- Revisar linea comentada en Card.jsx
    case "DELETE_CART":
      const filteredCart = state.cart.filter(
        (item) => item.id != action.payload
      );
      return { ...state, cart: filteredCart };
  }
};
const initialState = {
  recipes: [],
  cart: [],
};

const Context = ({ children }) => {
  // const [cart, setCart] = useState([]);
  // const [recipes, setRecipes] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const apiKey = "68d481a0fbc340308fbf934f836ee8c6";
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + apiKey;
  console.log(state);
  useEffect(() => {
    axios(url)
      .then((res) =>
        dispatch({ type: "GET_RECIPES", payload: res.data.recipes })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <RecipeStates.Provider value={{ state, dispatch }}>
      {children}
    </RecipeStates.Provider>
  );
};

export default Context;

export const useRecipeStates = () => useContext(RecipeStates);
