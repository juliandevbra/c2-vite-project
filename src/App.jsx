import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import AsyncAwait from "./Components/AsyncAwait";
import ExampleFetch from "./Components/FetchyAxios";

function App() {
  return (
    <>
      {/* <ExampleFetch />
      <AsyncAwait /> */}
      <Navbar />
      <Form />
      <Home />
    </>
  );
}

export default App;
