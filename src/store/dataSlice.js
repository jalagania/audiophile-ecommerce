import { data } from "../data";
import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: data,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});
