import { useEffect } from "react";
import "./OrderConfirmation.css";
import checkIcon from "../../Images/check.png";
import { useLocation, useNavigate } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const {
    _id,
    clientInfo: { firstName, lastName, email, phone },
    shippingAddress,
    OrderedProduct,
    subtotal,
    totalPrice,
    PaymentMethod,
    shippingCharge,
    vat,
  } = useLocation()?.state;

  useEffect(() => {
    window.history.pushState(null, "", "/");
  }, []);

  return (
    <div className="order-confirmed">
      <div className="left bg-black">
        <h3>Order ID: {_id}</h3>
        <div>
          <h3>Customer</h3>
          <p>Name: {firstName + lastName}</p>
          <p>Email: {email}</p>
          <p>Number: {phone}</p>
        </div>
        <div>
          <h3>Shipping Address</h3>
          <p>City: {shippingAddress?.city}</p>
          <p>Address: {shippingAddress?.address}</p>
        </div>
        <div>
          <h3>Payment Method</h3>
          <p>Cash on delivery</p>
        </div>
        <div className="order-summary">
          <h3>{PaymentMethod}</h3>
          <div>
            <div className="ordered-products">
                <div>
                  <p>{OrderedProduct?.quantity}x</p>
                  <p>{OrderedProduct?.name.length > 15 ? OrderedProduct?.name.slice(0, 15) + "..." : OrderedProduct?.name}</p>
                  <p>
                    BDT <span className="font">{subtotal}</span>
                  </p>
                </div>
            </div>
            <div className="billing">
              <div>
                <p>Sub Total: </p>
                <p>
                  BDT <span className="font">{subtotal}</span>
                </p>
              </div>
              <div>
                <p>Shipping: </p>
                <p>
                  BDT <span className="font">{shippingCharge}</span>
                </p>
              </div>
              {/* <div>
                <p>VAT: </p>
                <p>
                  BDT <span className="font">{vat}</span>
                </p>
              </div> */}
              <div>
                <p>Total: </p>
                <p>
                  BDT <span className="font">{totalPrice}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="bg-black" src={checkIcon} alt="" />
        <h2>Your Order is Confirmed!</h2>
        <h3>Thank you for ordering</h3>
        <p>
          We'll send you a shipping confirmation email as soon as your order
          ships.
        </p>
        <div>
          <button onClick={() => navigate("/")}>Return Home</button>
          {/* <button className="bg-black" onClick={() => navigate("/shop")}>
            Continue Shopping
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
