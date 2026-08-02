import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  const [toggle, setToggle] = useState("Home");

  return (
    <div className="h-screen p-2">
      <Navbar />
      <div>
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
