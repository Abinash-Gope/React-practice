import React, { useContext } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="h-10 text-white bg-black p-5 rounded flex items-center justify-between">
      <div>logo</div>
      <div className="flex gap-10 text-xl">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
