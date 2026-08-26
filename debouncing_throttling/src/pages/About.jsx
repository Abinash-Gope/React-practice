import axios from "axios";
import React, { useEffect } from "react";
import { getUsers } from "../apis/usersApi";

const About = () => {
  console.log('about chal gaya')
  let data = getUsers();

  return <div>About</div>;
};

export default About;
