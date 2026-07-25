import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  console.log("App rendering...");

  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Hello - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;
