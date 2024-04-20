"use client";

import { RootState } from "@/state/store";
import React from "react";
import { useSelector } from "react-redux";
import CustomerCart from "./CustomerCart";
import AdminCart from "./admin/AdminCart";

const UserRoleCart = () => {
  const auth = useSelector((state: RootState) => state.auth.value);
  return <>{auth === "customer" ? <CustomerCart /> : <AdminCart />}</>;
};

export default UserRoleCart;
