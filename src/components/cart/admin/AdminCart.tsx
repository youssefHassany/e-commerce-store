"use client";

import React, { useEffect, useState } from "react";
import AdminCartItemsList from "./AdminCartItemsList";
import Title from "@/components/title/Title";

const AdminCart = () => {
  return (
    <div className="h-[350px] overflow-y-scroll p-4 bg-zinc-800 rounded-lg">
      <div className="text-center">
        <Title title="Carts" />
      </div>
      <AdminCartItemsList />
    </div>
  );
};

export default AdminCart;
