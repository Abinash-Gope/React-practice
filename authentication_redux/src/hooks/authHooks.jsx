import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export const useAuth = () => {
  const navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log(data);
  };
  const loginForm = (data) => {
    console.log(data);
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
