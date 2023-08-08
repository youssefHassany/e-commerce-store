import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center">
        <Link
          className="inline-block mr-8 text-xl relative before:absolute before:h-1 before:w-0 before:bg-white before:bottom-0 before:duration-200 hover:before:w-full"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="inline-block mr-8 text-xl bg-gray-700 shadow-lg p-2 rounded-full hover:translate-x-1 duration-200"
          to={"/cart"}
        >
          <FiShoppingCart />
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
