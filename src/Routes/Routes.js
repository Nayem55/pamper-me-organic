import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CheckoutPage from "../Pages/Checkout/CheckoutPage";
import OrderConfirmation from "../Pages/OrderConfirmation/OrderConfirmation";

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
      {
        path: "/order-confirmation",
        element: <OrderConfirmation></OrderConfirmation>,
      },
    ],
  },

]);

export default router;