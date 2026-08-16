import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-5 p-5 bg-black text-white rounded m-2">
      <NavLink to={"/main"}>Home</NavLink>
      <NavLink to={"/main/about"}>About</NavLink>
      <NavLink to={"/main/contact"}>Contact</NavLink>
    </div>
  );
};

export default Navbar;
