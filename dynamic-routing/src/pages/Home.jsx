import axios from "axios";
import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Home = () => {
  let { productsData, setProductsData } = useContext(MyStore);
  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  getProductsData();

  return (
    <div>
      <h1>Home pages</h1>
    </div>
  );
};

export default Home;
