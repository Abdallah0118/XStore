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
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Link, useNavigate } from "react-router-dom";

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
        <table className="m-5 w-11/12 mx-auto">
          <thead className=" border-y-2">
            <tr>
              <th className="text-start">Product</th>
              <th className="text-start">Quantity</th>
              <th className="text-start">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id} className=" border-b-2">
                  <td className="flex">
                    <div className="w-24 h-24">
                      <img
                        src={product.thumbnail}
                        alt="product"
                        loading="lazy"
                        className=" object-contain w-24 h-24"
                      />
                    </div>

                    <div className=" flex flex-col justify-center ml-4">
                      <h3 className=" font-bold text-base w-3/4">
                        {product.title}
                      </h3>
                      <span className=" font-medium text-sm text-gray-600">
                        {formatCurrency(product.unitPrice)}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-start">
                      <button
                        onClick={() => {
                          dispatch(increaseItemQuantity(product.id));
                        }}
                      >
                        <AddOutlinedIcon color="success" fontSize="small" />
                      </button>
                      <span className="text-center">{product.quantity}</span>
                      <button
                        onClick={() => {
                          dispatch(decreaseItemQuantity(product.id));
                        }}
                      >
                        <RemoveOutlinedIcon color="warning" fontSize="small" />
                      </button>
                    </div>
                  </td>
                  <td>
                    {formatCurrency(product.quantity * product.unitPrice)}
                  </td>
                  <td>
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
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot className=" border-b-2">
            <tr>
              <th>
                <Link
                  to="/"
                  className=" bg-indigo-600 hover:bg-indigo-700 rounded-md  block my-2 py-2 text-white w-3/4"
                >
                  Continue Shopping
                </Link>
              </th>
              <th colSpan={2}>
                <button
                  onClick={deleteAllHandler}
                  className=" bg-red-600 hover:bg-red-700 rounded-md  block my-2 py-2 text-white  w-3/4"
                >
                  Delete All
                </button>
              </th>
            </tr>
          </tfoot>
        </table>
      ) : (
        <h2 className="text-center my-4 font-semibold text-3xl">
          Your Cart is Empty
        </h2>
      )}
    </>
  );
};

export default CartTable;
