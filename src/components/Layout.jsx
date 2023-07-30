import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Cart from "./Cart";

const Layout = () => {
  return (
    <div id="layout">
      <NavBar />
      <Cart />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
