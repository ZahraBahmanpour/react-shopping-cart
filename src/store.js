import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import productReducer from "./features/product/productSlice";
import productApi from "./features/product/productSlice-rtkQuery";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
    // [productApi.reducerPath]: productApi.reducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(productApi.middleware),
});

// setupListeners(store.dispatch);
