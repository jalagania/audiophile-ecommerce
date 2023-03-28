import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartModal",
  initialState: {
    cartIsVisible: false,
  },
  reducers: {
    setCartIsVisible: (state, action) => {
      state.cartIsVisible = action.payload;
    },
  },
});
