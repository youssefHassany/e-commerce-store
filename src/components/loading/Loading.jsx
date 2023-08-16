import React from "react";

const Loading = () => {
  return (
    <div className="w-full p-20 flex justify-center">
      <div className="w-32 h-32 border-t-4 border-l-4 border-red-700 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
