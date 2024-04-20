"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import CustomerNav from "./CustomerNav";
import AdminNav from "./AdminNav";

const Nav = () => {
  const auth = useSelector((state: RootState) => state.auth.value);

  if (auth === "none") {
    return <></>;
  }

  if (auth === "admin") {
    return <AdminNav />;
  }

  return <CustomerNav />;
};

export default Nav;
