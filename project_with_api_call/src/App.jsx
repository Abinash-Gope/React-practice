import axios from "axios";
import React from "react";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";

const App = () => {

  const [productsData, setProductsData] = useState([])
  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("Error in Api", error);
    }
  };

getProductsData();

  return (
    <div>
      <Navbar />

      <ProductCards />
    </div>
  );
};

export default App;
