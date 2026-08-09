import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || []);

  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedinUser")));

  console.log("reg user ->", registeredUser);
  console.log("log user ->", loggedInUser);

  return (
    <Auth.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
