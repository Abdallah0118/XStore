import React, { useState } from "react";
import ProductImgSlider from "../ui/ProductImgSlider";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/CartSlice";
import { formatCurrency } from "../utils/Helper";
import { feedBackVisibil } from "../store/CartFeedbackSlice";

const ProductPage = () => {
  const product = useLoaderData();

  const { id, price, title, description, brand, category, thumbnail, images } =
    product;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const newItem = {
      id,
      unitPrice: price,
      title,
      description,
      brand,
      category,
      thumbnail,
      images,
      quantity: inputValue,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
    dispatch(feedBackVisibil());
    setTimeout(() => {
      dispatch(feedBackVisibil());
    }, 2000);
  };

  const [inputValue, setInputValue] = useState(1);

  return (
    <div className="flex lg:flex-row flex-col mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-white my-10 rounded-lg">
      <div>
        <ProductImgSlider {...product} />
      </div>
      <div className="ml-5">
        <h1 className=" font-bold text-4xl">{title}</h1>
        <h2 className=" font-medium text-md my-2">{brand}</h2>
        <p className=" font-normal text-md my-2 text-gray-700">{description}</p>
        <p className=" font-bold text-md my-2">{formatCurrency(price)}</p>
        <div className="flex items-center justify-between ">
          <input
            type="number"
            max={10}
            min={1}
            value={inputValue}
            className="border-gray-200 border-2 h-10 rounded-md mr-4 text-center"
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            onClick={addToCartHandler}
            className=" bg-indigo-600 hover:bg-indigo-700 rounded-md w-full block mx-auto my-2 py-2 text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

export const loader = async ({ request, params }) => {
  const id = params.id;
  const response = await fetch("https://dummyjson.com/products/" + id);
  if (!response.ok) {
    console.log("data error");
  } else {
    const data = await response.json();
    return data;
  }
};
