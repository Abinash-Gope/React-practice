import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-4">
      <h1>Logo</h1>
      <div className="flex gap-10 items-center justify-between">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
