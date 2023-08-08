import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../store/CartSlice";
import { formatCurrency } from "../utils/Helper";
import { useState } from "react";
import { feedBackVisibil } from "../store/CartFeedbackSlice";
import { Button } from "@material-tailwind/react";

const ProductItem = ({
  id,
  title,
  description,
  price,
  brand,
  category,
  thumbnail,
  images,
}) => {
  // cart quantity
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
    <div className=" shadow-lg p-2 rounded-lg">
      <div></div>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none hover:opacity-75 h-80">
        <Link to={`/products/${id}`}>
          <img
            src={thumbnail}
            alt="Not found!"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </Link>
      </div>
      <div className="mt-4 flex justify-between h-9">
        <div>
          <h3 className="text-sm text-gray-700">{title}</h3>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {formatCurrency(price)}
        </p>
      </div>
      <div className="flex items-center justify-between ">
        <input
          type="number"
          max={10}
          min={1}
          value={inputValue}
          className="border-gray-200 border-2 h-10 rounded-md mr-4 text-center w-1/3"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button
          onClick={addToCartHandler}
          className=" font-medium w-full"
          style={{
            textTransform: "none",
            fontFamily: "inherit",
            fontSize: "inherit",
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
