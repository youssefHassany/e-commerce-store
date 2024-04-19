"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import CustomerNav from "./CustomerNav";

const Nav = () => {
  const auth = useSelector((state: RootState) => state.auth.value);

  if (auth === "none") {
    return <></>;
  }

  if (auth === "admin") {
    return <></>;
  }

  return <CustomerNav />;
};

export default Nav;
