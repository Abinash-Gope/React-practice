import { axiosInstance } from "../config/axiosinstance";

export const getProductsDataApi = async () => {
  try {
    const res = await axiosInstance.get("/products");
    return res.data.products;
  } catch (error) {
    console.log("error in products API", error);
  }
};
