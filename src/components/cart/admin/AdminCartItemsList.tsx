"use client";

import { AdminCartItemType } from "@/types/AdminCartItem";
import React, { useEffect, useState } from "react";
import AdminCartItem from "./AdminCartItem";
import Loading from "@/app/loading";
import Title from "@/components/title/Title";

const AdminCartItemsList = () => {
  const [carts, setCarts] = useState<AdminCartItemType[] | null>(null);

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

  if (!carts) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <Title title="Carts" />
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="text-center">
        <Title title="Carts" />
      </div>
      {carts.map((item) => (
        <AdminCartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default AdminCartItemsList;
