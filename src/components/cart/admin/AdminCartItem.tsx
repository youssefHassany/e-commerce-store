import { AdminCartItemType } from "@/types/AdminCartItem";
import React from "react";
import CustomerInOrder from "./CustomerInOrder";
import OrdersWrapper from "./OrdersWrapper";

const AdminCartItem = (item: AdminCartItemType) => {
  return (
    <div className="w-full bg-secondary-foreground p-4 rounded flex flex-col">
      <CustomerInOrder id={item.id} />
      <OrdersWrapper {...item} />
    </div>
  );
};

export default AdminCartItem;
