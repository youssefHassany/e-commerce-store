import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { FaShoppingCart } from "react-icons/fa";
import CartItemsList from "./CartItemsList";
import CartDetails from "./CartDetails";

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <FaShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-zinc-800 border-black overflow-y-scroll">
        <SheetHeader>
          <SheetTitle className="text-secondary">Your Cart</SheetTitle>
          <SheetDescription className="text-secondary relative">
            <CartItemsList />
            <CartDetails />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
