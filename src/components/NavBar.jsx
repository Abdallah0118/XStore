import { toggleCartActions } from "../store/ToggleCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import "./css/Navbar.css";
import { getTotalCartQuantity } from "../store/CartSlice";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  // that is for open and close Cart
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(toggleCartActions.toggle());
  };

  // cart quantity
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <NavLink
                      end
                      to="/"
                      className="m-2 block p-2 font-medium text-gray-900  hover:text-indigo-600"
                    >
                      Home
                    </NavLink>
                    <span className="m-2 block p-2 font-medium text-gray-900  hover:text-indigo-600">
                      <DropDownMenu />
                    </span>
                    <NavLink
                      to="/about"
                      className="m-2 block p-2 font-medium text-gray-900  hover:text-indigo-600"
                    >
                      About
                    </NavLink>
                  </div>
                </div>

                <div className=" border-t border-gray-200 px-4 py-6 underline">
                  <div className="flow-root">
                    <Link
                      to="#"
                      className="m-2 block p-2 font-medium text-gray-900 hover:text-indigo-600"
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      to="#"
                      className="m-2 block p-2 font-medium text-gray-900 hover:text-indigo-600"
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="hidden lg:mx-auto lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <NavLink
                    end
                    to="/"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600  border-b-2 border-transparent hover:border-b-2 hover:border-b-indigo-600 "
                  >
                    Home
                  </NavLink>
                  <span className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600  border-b-2 border-transparent hover:border-b-2 hover:border-b-indigo-600 ">
                    <DropDownMenu />
                  </span>
                  <NavLink
                    to="/about"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600  border-b-2 border-transparent hover:border-b-2 hover:border-b-indigo-600 "
                  >
                    About
                  </NavLink>
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to="#"
                    className="text-sm font-medium text-gray-700 hover:text-indigo-600"
                  >
                    Sign in
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link
                    to="#"
                    className="text-sm font-medium text-gray-700 hover:text-indigo-600"
                  >
                    Create account
                  </Link>
                </div>
                {/* flag  */}
                <div className="hidden lg:ml-8 lg:flex">
                  <Link
                    to="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      src={require("../images/Flag_of_Egypt.svg.webp")}
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">EGP</span>
                  </Link>
                </div>
                {/* Cart */}
                <div className=" relative flow-root lg:ml-6">
                  <button
                    onClick={toggleCartHandler}
                    className="group -m-2 flex items-center p-2 relative"
                  >
                    <ShoppingBagIcon
                      className="h-7 w-7 flex-shrink-0 text-gray-400 group-hover:text-indigo-600 "
                      aria-hidden="true"
                    />
                    <span className=" absolute left-7 bottom-6 text-white h-5 w-5 rounded-full text-sm font-medium bg-red-600 flex items-center justify-center">
                      {parseInt(totalCartQuantity, 10)}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
