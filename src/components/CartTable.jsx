import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../utils/Helper";
import {
  clearCart,
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "../store/CartSlice";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const CartTable = () => {
  const products = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteAllHandler = () => {
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <>
      {products.length > 0 ? (
        <div>
          <table className="m-5 w-11/12 mx-auto">
            <thead className=" border-y-2">
              <tr>
                <th className="text-start">Product</th>
                <th className="text-start">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product) => (
                  <tr key={product.id} className=" border-b-2">
                    <td className="flex ">
                      <div className="w-36 h-36">
                        <img
                          src={product.thumbnail}
                          alt="product"
                          loading="lazy"
                          className=" object-contain w-36 h-36"
                        />
                      </div>
                      <div className=" flex flex-col justify-center ml-4">
                        <h3 className=" font-bold text-base mb-2">
                          {product.title}
                        </h3>
                        <span className="mb-2 font-medium text-sm text-gray-600">
                          {formatCurrency(product.unitPrice)}
                        </span>
                        <div className="flex items-center justify-start border-2 rounded-md w-fit">
                          <Button
                            size="sm"
                            onClick={() => {
                              dispatch(increaseItemQuantity(product.id));
                            }}
                            className=" p-1"
                            color="green"
                            variant="text"
                            style={{
                              textTransform: "none",
                              fontFamily: "inherit",
                              fontSize: "inherit",
                            }}
                          >
                            +
                          </Button>
                          <span className="text-center mx-3">
                            {product.quantity}
                          </span>
                          <Button
                            size="sm"
                            onClick={() => {
                              dispatch(decreaseItemQuantity(product.id));
                            }}
                            className=" p-1"
                            color="red"
                            variant="text"
                            style={{
                              textTransform: "none",
                              fontFamily: "inherit",
                              fontSize: "inherit",
                            }}
                          >
                            -
                          </Button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex flex-col justify-center items-center">
                        <p className="mb-2 font-medium text-sm text-gray-600">
                          {formatCurrency(product.quantity * product.unitPrice)}
                        </p>
                        <button
                          onClick={() => {
                            dispatch(deleteItem(product.id));
                          }}
                          className=" cursor-pointer p-2 hover:p-2 rounded-full hover:bg-red-200 bg-gray-200 ease-in-out duration-300"
                        >
                          <DeleteForeverOutlinedIcon
                            color="warning"
                            fontSize="medium"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex flex-col md:flex-row justify-center mx-6 my-7">
            <Button
              onClick={() => {
                navigate("/");
              }}
              className=" font-medium w-full m-2"
              style={{
                textTransform: "none",
                fontFamily: "inherit",
                fontSize: "inherit",
              }}
            >
              Continue Shopping
            </Button>

            <Button
              onClick={deleteAllHandler}
              className=" font-medium  w-full m-2"
              color="red"
              style={{
                textTransform: "none",
                fontFamily: "inherit",
                fontSize: "inherit",
              }}
            >
              Delete All
            </Button>
          </div>
        </div>
      ) : (
        <h2 className="text-center my-4 font-semibold text-3xl">
          Your Cart is Empty
        </h2>
      )}
    </>
  );
};

export default CartTable;
