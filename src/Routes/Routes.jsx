import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home/Home.jsx";
import CheckoutPage from "../Pages/Checkout/CheckoutPage.jsx";
import OrderConfirmation from "../Pages/OrderConfirmation/OrderConfirmation.jsx";

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