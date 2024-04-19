"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import CustomerSignInButton from "./CustomerSignInButton";
import AdminSignInButton from "./AdminSingInButton";

const SignUpForm = () => {
  return (
    <motion.div
      transition={{ duration: 0.8 }}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
    >
      <Tabs defaultValue="account" className="md:w-[400px]">
        <TabsList className="grid w-full grid-cols-2 bg-secondary-foreground text-secondary bg-zinc-800">
          <TabsTrigger value="account">Customer</TabsTrigger>
          <TabsTrigger value="password">Admin</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="bg-secondary-foreground text-secondary">
            <CardHeader>
              <CardTitle>Customer Sign In</CardTitle>
              <CardDescription>
                Just Press Sign In There&apos;s No Users anyway it&apos;s just
                for view & practice.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <label htmlFor="name">Customer Name</label>
                <Input
                  className="bg-secondary-foreground text-secondary"
                  id="name"
                  defaultValue="Pedro Duarte"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="username">Username</label>
                <Input
                  className="bg-secondary-foreground text-secondary"
                  id="username"
                  defaultValue="@peduarte"
                />
              </div>
            </CardContent>
            <CardFooter>
              <CustomerSignInButton />
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card className="bg-secondary-foreground text-secondary">
            <CardHeader>
              <CardTitle>Admin Sign In</CardTitle>
              <CardDescription>
                Just Press Sign In There&apos;s No Users anyway it&apos;s just
                for view & practice.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <label htmlFor="name">Admin Name</label>
                <Input
                  className="bg-secondary-foreground text-secondary"
                  id="name"
                  defaultValue="Pedro Duarte"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="username">Username</label>
                <Input
                  className="bg-secondary-foreground text-secondary"
                  id="username"
                  defaultValue="@peduarte"
                />
              </div>
            </CardContent>
            <CardFooter>
              <AdminSignInButton />
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default SignUpForm;
