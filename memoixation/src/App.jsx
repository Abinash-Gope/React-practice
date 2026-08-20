import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("App rendering....");

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState({name:"abinash", id: 789})
  return (
    <div>
      <h1>App</h1>
      <h2>count is {count}</h2>
      <h2>Name is {users.name}</h2>
      <button onClick={() => {
        setUsers({...users, name:"sibom"})
      }}>Change name</button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <Home users={users}/>
      <About />
    </div>
  );
};

export default App;
