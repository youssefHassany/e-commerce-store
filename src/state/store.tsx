import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cart/cartSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
