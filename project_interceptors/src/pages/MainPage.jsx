import React from "react";
import Navbar from "../component/Navbar";
import { Outlet } from "react-router";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainPage;
