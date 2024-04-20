import { AdminCartItemType } from "@/types/AdminCartItem";
import React from "react";
import CustomerInOrder from "./CustomerInOrder";
import OrdersWrapper from "./OrdersWrapper";
import { motion } from "framer-motion";

const AdminCartItem = (item: AdminCartItemType) => {
  return (
    <motion.div
      className="w-full bg-secondary-foreground p-4 rounded flex flex-col"
      transition={{ duration: 0.8, delay: item.id * 0.1 }}
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
    >
      <CustomerInOrder id={item.id} />
      <OrdersWrapper {...item} />
    </motion.div>
  );
};

export default AdminCartItem;
