import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalCount: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      console.log(action.payload);
      const exist = state.cartItems.find((item) => item.id === product.id);
      if (exist) {
        exist.qty += 1;
      } else {
        state.cartItems.push({ ...product, qty: 1 });
      }

      state.totalCount = state.cartItems.reduce(
        (acc, item) => acc + item.qty,
        0
      );

      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.qty * item.price,
        0
      );
    },

    removeFromCart: (state, action) => {
      const product = action.payload;
      const exist = state.cartItems.find((item) => item.id === product.id);
      if (exist.qty === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== product.id
        );
      } else {
        exist.qty -= 1;
      }

      state.totalCount = state.cartItems.reduce(
        (acc, item) => acc + item.qty,
        0
      );

      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.qty * item.price,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
