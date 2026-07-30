import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import CartScreen from "./pages/CartScreen";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [productsData, setProductsData] = useState([]);
  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("Error in Api", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-4">
      <Navbar />

      {isCartOpen ? (
        <div>
          <CartScreen setIsCartOpen={setIsCartOpen}/>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {productsData.map((elem) => {
            return <ProductCards key={elem.id} product={elem} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
