import React, { useState } from "react";
import { NavLink } from "react-router";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [toggle, setToggle] = useState("Home");

  return (
    <div className="h-screen p-2">
      <nav className="flex items-center justify-between mb-4">
        <h1>Logo</h1>
        <div className="flex gap-10 items-center justify-between">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        <button>Login</button>
      </nav>
      <div>
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
