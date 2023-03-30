import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartModal",
  initialState: {
    cartIsVisible: false,
    cartItems: [],
  },
  reducers: {
    setCartIsVisible: (state, action) => {
      state.cartIsVisible = action.payload;
    },

    setCartItems: (state, action) => {
      const cartItem = action.payload;
      const items = state.cartItems.map((item) => item.id);
      if (items.includes(cartItem.id)) {
        state.cartItems.forEach((item) => {
          if (item.id === cartItem.id) {
            item.amount = item.amount + cartItem.amount;
          }
        });
      } else {
        state.cartItems.push(action.payload);
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    decreaseItemAmount: (state, action) => {
      const id = action.payload;
      state.cartItems.forEach((item) => {
        if (item.id === id && item.amount !== 0) {
          item.amount -= 1;
        }
      });
    },

    increaseItemAmount: (state, action) => {
      const id = action.payload;
      state.cartItems.forEach((item) => {
        if (item.id === id && item.amount < 5) {
          item.amount += 1;
        }
      });
    },
  },
});
