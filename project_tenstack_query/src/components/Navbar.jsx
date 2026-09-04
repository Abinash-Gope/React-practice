import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-black text-white p-3">
      <h1>SkyDart</h1>

      <div className="flex gap-8 text-xl items-center">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-300 underline" : "";
          }}
          to={"/main"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-300 underline" : "";
          }}
          to={"/main/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "text-yellow-300 underline" : "";
          }}
          to={"/main/shop"}
        >
          Shop
        </NavLink>
      </div>
      <div className="flex gap-5 items-center">
        <h1>hey <strong className="text-yellow-500">Dev</strong></h1>
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/90 border hover:border-yellow-500 hover:bg-black hover:text-yellow-500 text-white text-xs font-semibold rounded-md shadow-sm transition-all duration-300 active:scale-[0.97] cursor-pointer">
          <svg
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-3.5 h-3.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span>Add</span>
        </button>

        <button className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-slate-500 hover:text-red-600 font-medium rounded border border-slate-200 hover:border-red-200 hover:bg-red-50 transition-colors duration-300">
          <span>Logout</span>
          <svg
            xmlns="http://w3.org"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-3 h-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H8.25"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
