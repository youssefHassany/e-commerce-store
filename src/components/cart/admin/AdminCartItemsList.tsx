"use client";

import { AdminCartItemType } from "@/types/AdminCartItem";
import React, { useEffect, useState } from "react";
import AdminCartItem from "./AdminCartItem";

const AdminCartItemsList = () => {
  const [carts, setCarts] = useState<AdminCartItemType[]>([]);

  useEffect(() => {
    const getCarts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/carts");
        const data: AdminCartItemType[] = await res.json();
        setCarts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCarts();
  }, [carts]);
  return (
    <div className="w-full flex flex-col gap-2">
      {carts.map((item) => (
        <AdminCartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default AdminCartItemsList;
