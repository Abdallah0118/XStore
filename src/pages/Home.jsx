import React from "react";
import ProductSwiper from "../components/ProductSwiper";
import ProductLists from "../components/ProductLists";
import LogoSlider from "../ui/LogoSlider";

const Home = () => {
  return (
    <>
      <ProductSwiper />
      <LogoSlider />
      <ProductLists />
    </>
  );
};

export default Home;
