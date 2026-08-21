import React, { useCallback, useMemo, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("App rendering....");

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({ name: "abinash", id: 789 });
  let calculation = useMemo(() => {
    console.log("calcu is runing");
    let sum = 0;

    for (let i = 0; i < 100; i++) {
      sum += i;
    }
    return sum;
  });

  return (
    <div>
      <h1>App</h1>
      <h2>count is {count}</h2>
      <h2>Name is {users.name}</h2>
      <h3>My calculation is {calculation}</h3>
      <button
        onClick={() => {
          setUsers({ ...users, name: "sibom" });
        }}
      >
        Change name
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <Home />
      <About />
    </div>
  );
};

export default App;
