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

export const loader = async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    console.log("data error");
  } else {
    const data = await response.json();
    return data.products;
  }
};
