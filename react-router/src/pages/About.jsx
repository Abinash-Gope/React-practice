import React from "react";
import { Outlet, useNavigate } from "react-router";

const About = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>This is about page</h1>
      <button onClick={() => navigate("/about/more")}>More</button>
      <Outlet />
    </div>
  );
};

export default About;
