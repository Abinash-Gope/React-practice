import { useQuery } from "@tanstack/react-query";
import { getProductsDataApi } from "../api/productApi";

export const useProductApi = () => {
  const {
    data,
    isPending,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsDataApi,
    staleTime: 50000,
  });

  return {
    data,
    isPending,
    error,
  };
};
