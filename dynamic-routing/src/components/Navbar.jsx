import React, { useContext } from "react";

const Navbar = () => {
  return (
    <div className="h-10 text-white bg-black p-5 rounded flex items-center justify-between">
      <div>logo</div>
      <div className="flex gap-10 text-xl">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Products</p>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
