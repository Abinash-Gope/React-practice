import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersPage = () => {

  const [usersData, setUsersData] = useState([])
  let getUsersData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/users");
      console.log(res);
      setUsersData(res.data)
    } catch (error) {
      console.log("error in user api", error);
    }
  };

  useEffect(()=>{
    getUsersData();
  }, [])

  return <div>UsersPage</div>;
};

export default UsersPage;
