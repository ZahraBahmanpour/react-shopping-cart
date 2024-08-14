import axios from "../services/baseService";
import { BASE_URL, PRODUCTS_URL } from "./api";

export const readProducts = async (searchParams) => {
  try {
    const res = await axios.get(
      `${PRODUCTS_URL}${generateQueryParams(searchParams)}`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const readProduct = async (id) => {
  try {
    const res = await axios.get(`${PRODUCTS_URL}/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

const generateQueryParams = (searchParams) => {
  const name = searchParams.get("name");
  const available = searchParams.get("available");
  const url = new URL(`${BASE_URL}/${PRODUCTS_URL}`);
  if (name) {
    url.searchParams.set("name_like", name);
  }
  if (available) {
    url.searchParams.set("available", available);
  }
  console.log(url);
  return url.search;
};

const productService = {
  readProducts,
  readProduct,
};
export default productService;
