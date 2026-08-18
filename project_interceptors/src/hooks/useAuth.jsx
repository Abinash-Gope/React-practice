import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Auth } from "../context/AuthContext";

export const useAuth = () => {
  const { registeredUser, setRegisteredUser, loggedInUser, setLoggedInUser } = useContext(Auth);

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm();

  //login logic
  let loginFormSubmit = (data) => {
    let user = registeredUser.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("user not found or invalid credentials");
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedinUser", JSON.stringify(user));
    toast.success("User loggedin");
    navigate("/main");
    reset();
  };

  //register logic
  let registerFormSubmit = (data) => {
    let arr = [...registeredUser, data];
    setRegisteredUser(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("User registered successfully");
    reset();
    navigate("/");
  };

  // logout logic
  let logout = () => {
    localStorage.removeItem("loggedinUser");
    setLoggedInUser(null); // <-- Updates React state so PublicRoute/ProtectedRoute pick it up
    toast.warn("user logout");
    navigate("/");
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    watch,
    errors,
    loginFormSubmit,
    registerFormSubmit,
    logout
  };
};
