import React from "react";
import ProductImgSlider from "../ui/ProductImgSlider";
import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "../store/CartSlice";
import { formatCurrency } from "../utils/Helper";

const ProductPage = () => {
  const product = useLoaderData();

  const { id, price, title, description, brand, category, thumbnail, images } =
    product;

  const quantity = useSelector(getCurrentQuantityById(id));
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
      quantity: 1,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  };

  const increaseHandler = () => {
    dispatch(increaseItemQuantity(id));
  };
  const decreaseHandler = () => {
    dispatch(decreaseItemQuantity(id));
  };

  return (
    <div className="flex lg:flex-row flex-col mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-white my-10 rounded-lg">
      <div >
        <ProductImgSlider {...product} />
      </div>
      <div className="ml-5">
        <h1 className=" font-bold text-4xl">{title}</h1>
        <h2 className=" font-medium text-md my-2">{brand}</h2>
        <p className=" font-normal text-md my-2 text-gray-700">{description}</p>
        <p className=" font-bold text-md my-2">{formatCurrency(price)}</p>
        {quantity === 0 ? (
          <button
            onClick={addToCartHandler}
            className=" bg-indigo-600 hover:bg-indigo-700 rounded-md w-full block mx-auto my-2 py-2 text-white"
          >
            Add to cart
          </button>
        ) : (
          <div className="flex items-center justify-center my-2">
            <button
              onClick={increaseHandler}
              className=" bg-indigo-600 hover:bg-indigo-700 rounded-md w-5/12  py-2 text-white"
            >
              +
            </button>
            <span className=" w-2/12 text-center">{quantity}</span>
            <button
              onClick={decreaseHandler}
              className=" bg-indigo-600 hover:bg-indigo-700 rounded-md w-5/12 py-2 text-white"
            >
              -
            </button>
          </div>
        )}
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
