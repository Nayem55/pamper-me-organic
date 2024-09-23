import "./OrderDetails.css";

const OrderDetails = ({
  price,
  shippingCharge,
  totalPrice,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="order-details">
      <div>
        <div className="selectedProducts">
          <div className="item-header">
            <p className="product-name">Product</p>
            <p>Quantity</p>
            <p>Unit Price</p>
            <p className="total-price">Total Price</p>
          </div>
          <hr />
          <div className="item-row">
            <div className="product-name">
              {/* <img className="product-img" src={} alt="" /> */}
              <p>Pamper Me Essential Hair Oil</p>
            </div>
            <div className="quantity-controls flex items-center gap-2">
              <button
                className="flex justify-center items-center pb-1 bg-[#cccccc] hover:bg-black ease-in-out duration-200 w-[20px] h-[20px] text-[#ffffff] font-bold text-xl"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <p className="quantity-display">{quantity}</p>
              <button
                className="flex justify-center items-center pb-1 bg-[#cccccc] hover:bg-black ease-in-out duration-200 w-[20px] h-[20px] text-[#ffffff] font-bold text-xl"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <p className="font">BDT. 499</p>
            <p className="total-price font">BDT. {499 * quantity}</p>{" "}
            {/* Total price */}
          </div>
        </div>
        <div className="products-total-price">
          <div className="sub-total">
            <p>Sub-total :</p>
            <p className="font">BDT {price}</p>
          </div>
          <hr />
          <div className="sub-total shipping-charge">
            <div>
              <p>Shipping Charge :</p>
              <span>( Inside Dhaka 80, outside dhaka 150 )</span>
            </div>
            <p className="font">BDT {shippingCharge}</p>
          </div>
          <hr />
          {/* <div className="sub-total">
            <p className="">
              Vat (<span className="font">5</span>%) :
            </p>
            <p className="font">BDT {vat}</p>
          </div> */}
          <hr />
          <div className="total-price">
            <p>Total :</p>
            <p className="font">BDT {totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
