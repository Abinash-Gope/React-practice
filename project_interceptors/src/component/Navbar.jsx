import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="border-r border-gray-500">
      <h1>LOGO</h1>
      <div className="flex flex-col gap-4">
        <NavLink to={"/main"}>Home</NavLink>
        <NavLink to={"/main/users"}>Users</NavLink>
        <NavLink to={"/main/products"}>Products</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
