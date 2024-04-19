"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "@/state/cart/cartSlice";

const PurchaseMessage = () => {
  const dialogTriggerRef = useRef<any>(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // fire toast
    toast("Purchase Submitted!", {
      description: "Your Order has been confirmed",
    });

    // Programmatically trigger a click event on the dialogTriggerRef
    if (dialogTriggerRef.current) {
      dialogTriggerRef.current.click();
    }

    // clear the cart
    dispatch(clearCart());
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Purchase</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-800 text-secondary">
        <DialogHeader>
          <DialogTitle>Purchase Details</DialogTitle>
          <DialogDescription>
            This is just view, nothing will be purchased i&apos;m just
            practicing here.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <Input
              id="name"
              placeholder="Superman"
              className="col-span-3 bg-zinc-800"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="adress" className="text-right">
              Address
            </label>
            <Input
              id="address"
              placeholder="Planet Krypton"
              className="col-span-3 bg-zinc-800"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="creditCard" className="text-right">
              Credit Card
            </label>
            <Input
              id="creditCard"
              placeholder="0000 0000 0000"
              className="col-span-3 bg-zinc-800"
              type="number"
              required
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
        <DialogFooter>
          <DialogTrigger asChild>
            <Button
              className="bg-secondary hover:bg-secondary-foreground text-secondary-foreground hover:text-secondary"
              ref={dialogTriggerRef}
            >
              Close
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseMessage;
