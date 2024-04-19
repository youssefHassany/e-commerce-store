"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { setCustomer } from "@/state/auth/authSlice";

const CustomerSignInButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(setCustomer())}
      className="px-4 py-2 rounded-lg font-medium bg-secondary text-secondary-foreground hover:bg-zinc-800 hover:text-secondary duration-150"
    >
      Sign In
    </button>
  );
};

export default CustomerSignInButton;
