import { useNavigate } from "react-router";

export const useAuth = () => {
  const navigate = useNavigate();

  return {
    navigate,
  }
}