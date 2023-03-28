import { createSlice } from "@reduxjs/toolkit";

export const confirmationSlice = createSlice({
  name: "confirmation",
  initialState: {
    confirmationIsVisible: true,
  },
  reducers: {
    setConfirmationIsVisible: (state, action) => {
      state.confirmationIsVisible = action.payload;
    },
  },
});
