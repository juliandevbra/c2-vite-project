import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const RecipeStates = createContext();

const Context = ({ children }) => {
  const [salario, setSalario] = useState(1400000);
  return (
    <RecipeStates.Provider value={{ salario, setSalario }}>
      {children}
    </RecipeStates.Provider>
  );
};

export default Context;

export const useRecipeStates = () => useContext(RecipeStates);
