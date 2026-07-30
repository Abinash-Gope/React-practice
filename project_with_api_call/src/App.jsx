import axios from "axios";
import React from "react";

const App = () => {
  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res);
    } catch (error) {
      console.log("Error in Api", error);
    }
  };

getProductsData();

  return (
    <div>
      <h1>Hello friends</h1>
    </div>
  );
};

export default App;
