"use client";

import { RootState } from "@/state/store";
import React from "react";
import { useSelector } from "react-redux";
import Title from "../title/Title";
import SignUpForm from "../SignUp/SignUpForm";
import ProductsList from "../products list/ProductsList";
import AdminCart from "../cart/admin/AdminCart";
import UsersListWrapper from "../users list/UsersListWrapper";
import BarChart from "../graphs cards/barchart card/BarChart";
import PieChartCard from "../graphs cards/PieChartCard";
import HorizontalBarChartCard from "../graphs cards/HorizontalBarChartCard";

const UserAuthWrapper = () => {
  const auth = useSelector((state: RootState) => state.auth.value);

  if (auth === "none") {
    return (
      <main className="w-screen mx-auto flex min-h-screen flex-col lg:flex-row items-center justify-evenly py-24 px-2 md:px-8 bg-zinc-900 text-secondary">
        <Title title="Clothes Store" extraLarge />
        <SignUpForm />
      </main>
    );
  }

  if (auth === "admin") {
    return (
      <main className="w-screen mx-auto flex min-h-screen flex-col items-center justify-between py-24 px-2 md:px-8 bg-zinc-900 text-secondary">
        <div className="mb-10">
          <Title title="Dashboard" />
        </div>

        <section className="w-screen grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-3 p-3 px-6 md:px-12">
          <AdminCart />
          <UsersListWrapper />
          <HorizontalBarChartCard />
          <div className="lg:col-span-2">
            <BarChart />
          </div>
          <PieChartCard />
        </section>
      </main>
    );
  }

  // if the user is customer
  return (
    <main className="mx-auto flex min-h-screen flex-col items-center justify-between py-24 px-2 md:px-8 bg-zinc-900 text-secondary">
      <Title title="Products" />
      <ProductsList param="" />
    </main>
  );
};

export default UserAuthWrapper;
