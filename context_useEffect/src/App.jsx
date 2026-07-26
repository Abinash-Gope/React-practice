import React, { useContext, useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { MyStore } from "./context/MyContext";
import axios from "axios";

const App = () => {
  let { count, setCount } = useContext(MyStore);
  const [toggle, setToggle] = useState(true);

  let getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    console.log(res);
  };

  getData();

  return (
    <div>
      <h1>Hello - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle((prev) => !prev)}>Change toggle</button>
      <Home />
      {toggle ? <Contact /> : <About />}
    </div>
  );
};

export default App;
