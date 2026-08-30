import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import { useState } from "react";

export const useAuth = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );

  let {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    let arr = [...registeredUsers, data];
    
    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("user registered..")
  };
  const loginForm = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      return toast.error("invalid something...");
    }

    dispatch(addUser(user));
    toast.success("user logged in");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    errors,
    registerForm,
    loginForm,
  };
};
