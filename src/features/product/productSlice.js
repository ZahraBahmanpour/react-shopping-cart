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
  async (searchParams, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${PRODUCTS_URL}${generateQueryParams(searchParams)}`
      );
      console.log("hfjhsf", res);
      return res.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (product, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${PRODUCTS_URL}`, { product });
      return res.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.message);
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

    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
