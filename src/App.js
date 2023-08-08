import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home, { loader as fetchedProducts } from "./pages/Home";
import About from "./pages/About";
import ProductPage, { loader as productById } from "./pages/ProductPage";
import CartCheckout from "./pages/CartCheckout";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: fetchedProducts,
      },
      { path: "/about", element: <About /> },
      {
        path: "/products/:id",
        element: <ProductPage />,
        loader: productById,
      },
      {
        path: "/checkout",
        element: <CartCheckout />,
      },
    ],
  },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <SignUp /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
