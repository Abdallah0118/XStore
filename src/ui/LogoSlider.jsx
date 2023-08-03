import React from "react";
import "./LogoSlider.css";
import img1 from "../images/one.png";
import img2 from "../images/two.png";
import img3 from "../images/three.png";
import img4 from "../images/four.png";
import img5 from "../images/five.png";
import img6 from "../images/six.png";
import img7 from "../images/seven.png";
import img8 from "../images/eight.png";
import img9 from "../images/nine.png";
import img10 from "../images/ten.png";
import Marquee from "react-fast-marquee";

const LogoSlider = () => {
  return (
    <div className=" relative mt-12 text-center flex flex-col justify-center items-center">
      <div className="mb-12">
        <h1 className=" text-gray-600 text-2xl font-bold">
          Our Technology Partner
        </h1>
      </div>

      <div id="logosHolder" className=" text-center w-3/4 overflow-hidden">
        <Marquee direction="right" speed={100} delay={0}>
          <img className="w-3/4" src={img3} alt="" />
          <img className="w-3/4" src={img1} alt="" />
          <img className="w-3/4" src={img2} alt="" />
          <img className="w-3/4" src={img4} alt="" />
          <img className="w-3/4" src={img5} alt="" />
          <img className="w-3/4" src={img6} alt="" />
          <img className="w-3/4" src={img7} alt="" />
          <img className="w-3/4" src={img8} alt="" />
          <img className="w-3/4" src={img9} alt="" />
          <img className="w-3/4" src={img10} alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default LogoSlider;
