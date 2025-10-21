import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <Header />
      <main className="container mx-auto px-4 py-16">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
