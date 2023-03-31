import { data } from "../data";
import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: data,
  },
  reducers: {},
});
