"use client";

import { UserType } from "@/types/UserType";
import React, { useState, useEffect } from "react";

const CustomerInOrder = ({ id }: { id: number }) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://fakestoreapi.com/users/${id}`);
      const user: UserType = await res.json();
      setUser(user);
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>; // Or some loading indicator
  }

  return (
    <div className="font-medium">
      <div>
        Cutomer Name: {user.name.firstname} {user.name.lastname}
      </div>
      <div>Email: {user.email}</div>
    </div>
  );
};

export default CustomerInOrder;
