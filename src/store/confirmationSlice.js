import { createSlice } from "@reduxjs/toolkit";

export const confirmationSlice = createSlice({
  name: "confirmation",
  initialState: {
    confirmationIsVisible: false,
  },
  reducers: {
    setConfirmationIsVisible: (state, action) => {
      state.confirmationIsVisible = action.payload;
    },
  },
});
