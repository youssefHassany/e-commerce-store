import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AdminCartItemType } from "@/types/AdminCartItem";
import React from "react";
import OrdersList from "./OrdersList";

const OrdersWrapper = (orders: AdminCartItemType) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={`item-${orders.id}`}>
        <AccordionTrigger>See Orders</AccordionTrigger>
        <AccordionContent>
          {orders.products.map((product) => (
            <OrdersList key={product.productId} {...product} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default OrdersWrapper;
