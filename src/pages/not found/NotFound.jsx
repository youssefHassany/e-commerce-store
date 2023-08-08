import React from "react";
import imgSrc from "../../assets/no-results.png";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-2">
      <img src={imgSrc} className="w-80" />
      <h1 className="text-3xl">Oops, url destination doesn't exist</h1>
    </div>
  );
};

export default NotFound;
