import React, { useContext } from "react";
import { FetchedDataContext } from "../../App";
import CartProduct from "./CartProduct";
import Swal from "sweetalert2";

const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(FetchedDataContext);
  console.log(cartProducts);

  return (
    <>
      {cartProducts.length === 0 ? (
        <div className="h-screen flex items-center justify-center">
          <p className="text-4xl">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="mt-16 flex flex-col items-center gap-4 p-4">
            {cartProducts.map((product, idx) => (
              <CartProduct key={idx * 27} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => {
                Swal.fire(
                  "Congratulations!",
                  `You Purchased ${cartProducts.length} products!`,
                  "success"
                );
                setCartProducts([]);
              }}
              className="px-3 py-1 rounded mx-auto border-2 border-red-700 text-red-700 font-medium relative hover:text-white z-10
                        before:absolute before:bg-red-700 before:top-0 before:left-0 before:w-0 before:h-full before:duration-300 before:z-[-1] before:hover:w-full"
            >
              Purchase ({cartProducts.length}) Products
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
