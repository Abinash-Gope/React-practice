import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  let getProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error in the product api", error);
    }
  };
  console.log(productData)

  useEffect(() => {
    getProducts();
  }, []);

  if(isLoading) return <h1 className="text-4xl">Loading Products...</h1>

  return <div className="grid grid-cols-4 gap-5">
    {
      productData.map((val) => <ProductCard key={val.id} product={val}/>)
    }
  </div>;
};

export default ProductPage;
