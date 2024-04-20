import React from "react";
import UserAvatar from "../userAvatar/UserAvatar";

const AdminNav = () => {
  return (
    <nav className="fixed top-0 w-screen p-4 px-6 bg-zinc-900 bg-opacity-90 shadow flex justify-between items-center text-secondary">
      <UserAvatar />
    </nav>
  );
};

export default AdminNav;
