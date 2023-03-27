import { data } from "../data";
import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: data,
    selectedProduct: data[0],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },

    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});
