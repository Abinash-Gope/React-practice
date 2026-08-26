import axios from "axios";

export let getUsers = async () => {
    console.log("api wala function running")
  let res = await axios.get("https://fakestoreapi.com/users");
  console.log(res.data);
};
