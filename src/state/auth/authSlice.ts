import { createSlice } from "@reduxjs/toolkit";
import {
  getUserRole,
  setUserToAdmin,
  setUserToCustomer,
  signUserOut,
} from "@/utils/local storage/user-local-storage-functions";
import { UserRole } from "@/types/UserRole";

interface InitialStateType {
  value: UserRole;
}

const initialState: InitialStateType = {
  value: getUserRole(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      state.value = "none";
      signUserOut();
    },

    setCustomer: (state) => {
      state.value = "customer";
      setUserToCustomer();
    },

    setAdmin: (state) => {
      state.value = "admin";
      setUserToAdmin();
    },
  },
});

export const { setAdmin, setCustomer, signOut } = authSlice.actions;
export default authSlice.reducer;
