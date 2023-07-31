import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../store/ManageCartSlice";

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
  const quantity = useSelector((state) => state.cart.items[id]?.quantity || 0);
  console.log(quantity);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        title,
        description,
        thumbnail,
      })
    );
  };

  const decreaseHandler = () => {
    dispatch(cartActions.decreaseItemsInCart(id));
  };

  return (
    <div className=" shadow-lg p-2 rounded-lg">
      <div></div>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none hover:opacity-75 h-80">
        <Link to="">
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
        <p className="text-sm font-medium text-gray-900">{price} $</p>
      </div>
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
            onClick={addToCartHandler}
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
  );
};

export default ProductItem;
