import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router";

const MainPage = () => {
  return (
    <div className="h-screen p-2 grid grid-cols-[1fr_4fr] justify-center gap-5">
      <Navbar />
      <div className="h-full p-2 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
