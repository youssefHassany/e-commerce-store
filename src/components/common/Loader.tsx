import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="animate-spin border-4 border-t-primary border-r-primary border-b-black border-l-black border-solid rounded-full w-16 h-16"></div>
    </div>
  );
};

export default Loader;
