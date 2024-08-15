import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { generateQueryParams } from "../../services/productService";
import axios from "../../services/baseService";
import { PRODUCTS_URL } from "../../services/api";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

export const getProducts = createAsyncThunk(
  "product/readProducts",
  async (searchParams) => {
    try {
      const res = await axios.get(
        `${PRODUCTS_URL}${generateQueryParams(searchParams)}`
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
