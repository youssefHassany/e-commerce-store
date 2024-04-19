"use client";

import React from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { signOut } from "@/state/auth/authSlice";
import { useRouter } from "next/navigation";

const LogOutButton = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        router.push("/");
        dispatch(signOut());
      }}
      className="bg-zinc-800 text-secondary hover:bg-secondary hover:text-zinc-800 font-medium"
    >
      Log out
    </Button>
  );
};

export default LogOutButton;
