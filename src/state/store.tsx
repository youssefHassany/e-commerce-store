import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
