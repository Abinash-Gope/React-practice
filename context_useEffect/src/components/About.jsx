import React, { useEffect } from "react";

const About = () => {
  let int = setInterval(() => {
    console.log("hey im in about");
  }, 1000);

  useEffect(() => {
    console.log("About rendering...");

    return () => {
      clearInterval(int);
      console.log("im out");
    };
  }, []);

  return (
    <div>
      <h1>About page</h1>
    </div>
  );
};

export default About;
