import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../utils/Helper";
import { deleteItem, getCart } from "../store/CartSlice";

const CartItem = ({ id, thumbnail, title, quantity, unitPrice, brand }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={thumbnail}
          alt="product"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="/">
                <h5 className=" text-sm">{title}</h5>
              </a>
            </h3>
            <p className="ml-4">{formatCurrency(unitPrice)}</p>
          </div>
          <p class="mt-1 text-sm text-gray-500">{brand}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {quantity}</p>

          <div className="flex">
            <button
              onClick={removeHandler}
              type="button"
              className="font-medium text-red-600 hover:text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
