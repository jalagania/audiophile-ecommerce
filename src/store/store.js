import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { confirmationSlice } from "./confirmationSlice";
import { dataSlice } from "./dataSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    cart: cartSlice.reducer,
    confirmation: confirmationSlice.reducer,
  },
});
