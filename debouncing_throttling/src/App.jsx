import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [searchData, setSearchData] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const [scrollY, setScrollY] = useState(null);

  let throttle = false;

  let getProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("error in the product api", error);
    }
  };

  let filterData = () => {
    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductsData(result);
  };

  //debouncing
  useEffect(() => {
    if (!searchData) return;

    let timeOut = setTimeout(() => {
      filterData();
    }, 700);

    return () => clearTimeout(timeOut);
  }, [searchData]);

  //throttling...
  useEffect(() => {
    

    let handelScroll = () => {
      if (throttle) return;

      throttle = true;
      console.log("scroll triggered...");
      setScrollY(window.scrollY);

      setTimeout(() => {
        throttle = false
      }, 5000)
    };
    window.addEventListener("scroll", handelScroll);

    return () => window.removeEventListener("scroll", handelScroll)
  }, []);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Debouncing...</h1>

      <input
        style={{ padding: "10px 30px" }}
        type="text"
        placeholder="Search Products.."
        onChange={(e) => setSearchData(e.target.value)}
      />

      {productsData.map((val) => {
        return <h3 key={val.id}>{val.title}</h3>;
      })}
    </div>
  );
};

export default App;
