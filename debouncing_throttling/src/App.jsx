import React from "react";
import axios from "axios";

const App = () => {
  let getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
  };

  return <div>App</div>;
};

export default App;
