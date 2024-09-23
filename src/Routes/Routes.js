import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CheckoutPage from "../Pages/Checkout/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/checkout",
        element: <CheckoutPage></CheckoutPage>,
      },
    ],
  },

]);

export default router;