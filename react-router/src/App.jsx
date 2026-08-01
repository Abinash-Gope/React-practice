import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const [toggle, setToggle] = useState("Home");

  return (
    <div className="h-screen p-2">
      <nav className="flex items-center justify-between mb-4">
        <h1>Logo</h1>
        <div className="flex gap-10 items-center justify-between">
          <p className="cursor-pointer" onClick={() => setToggle("home")}>
            Home
          </p>
          <p className="cursor-pointer" onClick={() => setToggle("about")}>
            About
          </p>
          <p className="cursor-pointer" onClick={() => setToggle("contact")}>
            Contact
          </p>
        </div>
        <button>Login</button>
      </nav>

      <div>
        {toggle === "home" && <Home />}
        {toggle === "about" && <About />}
        {toggle === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default App;
