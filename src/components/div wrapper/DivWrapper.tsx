import React from "react";

const DivWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[400px] border-2 border-zinc-950 overflow-y-scroll p-4 bg-zinc-800 rounded-lg">
      {children}
    </div>
  );
};

export default DivWrapper;
