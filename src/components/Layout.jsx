import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Cart from "./Cart";
import { CircularProgress } from "@mui/material";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <div id="layout">
      <NavBar />
      <Cart />
      {navigation.state === "loading" && (
        <div className="flex justify-center items-center my-6">
          <CircularProgress />
        </div>
      )}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
