"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { setAdmin } from "@/state/auth/authSlice";

const AdminSignInButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(setAdmin())}
      className="px-4 py-2 rounded-lg font-medium bg-secondary text-secondary-foreground hover:bg-zinc-800 hover:text-secondary duration-150"
    >
      Sign In
    </button>
  );
};

export default AdminSignInButton;
