import { useState } from "react";
import "./App.css";
import ClassComponent from "./Components/ClassComponent";
import Form from "./Components/Form";
import FuncComponent from "./Components/FuncComponent";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {toggle && <FuncComponent />}
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Borrar" : "Montar"} Componente
      </button>
      {/* <Navbar />
      <Form />
      <Home /> */}
    </>
  );
}

export default App;
