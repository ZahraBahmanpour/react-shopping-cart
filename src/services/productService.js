import axios from "../services/baseService";
import { PRODUCTS_URL } from "./api";

export const readProducts = async () => {
  try {
    const res = await axios.get(PRODUCTS_URL);
    const { products } = res.data;
    return products;
  } catch (e) {
    console.log(e);
  }
};

const productService = {
  readProducts,
};
export default productService;
