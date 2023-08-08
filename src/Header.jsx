import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="w-screen bg-red-600 text-white flex items-center justify-between fixed top-0 left-0 shadow-lg py-2 px-4">
      <Link to={"/"}>
        <h1 className="text-2xl md:text-3xl font-medium tracking-widest">
          E-Commerce
        </h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
