import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
import { cartActions } from "../store/ManageCartSlice";

const ProductLists = () => {
  const products = useLoaderData();
  console.log(products);

  const dispatch = useDispatch();

  // cart quantity
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const productId = products.map((product) => product.id);
  const productName = products.map((product) => product.title);
  const productPrice = products.map((product) => product.price);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: productId,
        price: productPrice,
        name: productName,
      })
    );
  };

  const decreaseHandler = () => {
    dispatch(cartActions.decreaseHandler({ id: productId }));
  };

  return (
    <div className=" bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className=" shadow-lg p-2 rounded-lg">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none hover:opacity-75 h-80">
                <Link to="">
                  <img
                    src={product.thumbnail}
                    alt="Not found!"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </Link>
              </div>
              <div className="mt-4 flex justify-between h-9">
                <div>
                  <h3 className="text-sm text-gray-700">{product.title}</h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price} $
                </p>
              </div>
              {cartQuantity === 0 ? (
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
                  <span className=" w-2/12 text-center">{cartQuantity}</span>
                  <button
                    onClick={decreaseHandler}
                    className=" bg-indigo-600 hover:bg-indigo-700 rounded-md w-5/12 py-2 text-white"
                  >
                    -
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
