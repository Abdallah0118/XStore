import React from "react";
import { useSelector } from "react-redux";

const CartFeedback = () => {
  const visible = useSelector((state) => state.feedBack.feedBack);

  return (
    <div
      className="fixed top-16 z-10 ease-in-out duration-300"
      style={visible ? { right: "5px" } : { right: "-100%" }}
    >
      <div
        class="bg-teal-100 border-l-4 border-teal-500 text-teal-900 p-4 pe-20"
        role="alert"
      >
        <p class="font-bold">Successfully</p>
        <p>Added to cart.</p>
      </div>
      {/* sdfsdg  */}
    </div>
  );
};

export default CartFeedback;
