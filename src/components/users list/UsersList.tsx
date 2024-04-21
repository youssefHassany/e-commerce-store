"use client";

import { UserType } from "@/types/UserType";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loading from "@/app/loading";
import Title from "../title/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const UsersList = () => {
  const [users, setUsers] = useState<UserType[] | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/users");
        const usersList: UserType[] = await res.json();
        setUsers(usersList);
      } catch (error) {
        console.error(error);
      }
    };

    getUsers();
  }, [users]);

  if (!users) {
    return (
      <div className="h-full flex flex-col items-center">
        <Title title="Users" />
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div className="text-center">
        <Title title="Users" />
      </div>
      {users.map((user) => (
        <motion.div
          className="bg-secondary-foreground p-3 mb-2 rounded"
          key={user.id}
          transition={{ duration: 0.8, delay: user.id * 0.1 }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
        >
          <Accordion type="single" collapsible>
            <AccordionItem value={`item-${user.id}`}>
              <AccordionTrigger>
                {user.name.firstname} {user.name.lastname}
              </AccordionTrigger>
              <AccordionContent>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>City: {user.address.city}</p>
                <p>
                  Adress: {user.address.number}, {user.address.street}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      ))}
    </>
  );
};

export default UsersList;
