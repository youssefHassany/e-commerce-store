import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-screen bg-red-700 p-4 flex items-center justify-center mt-20 text-white sticky bottom-0">
      <p>Youssef Hassany {currentYear} &copy;</p>
    </footer>
  );
};

export default Footer;
