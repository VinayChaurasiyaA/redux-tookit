import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItem: [],
    subTotal: 0,
    shipping: 0,
    Tax: 0,
    Total: 0,
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItem.find((i) => i.id === item.id);

      if (isItemExist) {
        state.cartItem.forEach((i) => {
          if (i.id === item.id) {
            i.quantity += 1;
          }
        });
      } else {
        state.cartItem.push(item);
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItem.find((i) => i.id === item.id);

      if (isItemExist) {
        if (isItemExist.quantity > 1) {
          state.cartItem.forEach((i) => {
            if (i.id === item.id) {
              i.quantity -= 1;
            }
          });
        }
      }
    },
    deleteFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter((i) => i.id !== action.payload);
    },
    calculatePirce: (state) => {
      let sum = 0;
      state.cartItem.forEach((i) => (sum += i.price * i.quantity));
      state.subTotal = sum;
      state.shipping = sum === 0 ? 0 : sum < 1000 ? 0 : 200;
      state.Tax = +(state.subTotal * 0.18).toFixed();
      state.Total = state.subTotal + state.Tax + state.shipping;
    },
  }
);
