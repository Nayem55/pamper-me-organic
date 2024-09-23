import "./billingDetails.css";
import { FaInfoCircle } from "react-icons/fa";

const BillingDetails = ({
  city,
  setCity,
  handleOrderSubmit,
  locationSave,
  setLocationSave,
}) => {
  return (
    <div className="billing-details">
      <h3>Billilng Details</h3>
      <form action="" id="order-form" onSubmit={handleOrderSubmit}>
        <div className="client-info">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            required
            name="firstName"
            placeholder="Your First Name"
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            required
            name="lastName"
            placeholder="Your Last Name"
            id="lastName"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            name="email"
            placeholder="Your Email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">Number</label>
          <input
            type="number"
            required
            name="phone"
            placeholder="Your Number"
            id="phone"
          />
        </div>
        </div>
        <h3>Shipping Details</h3>
        <div className="shipping-address">
          <div>
            <label htmlFor="city">City</label>
            <select
              name="city"
              id="city"
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="">Choose a city</option>
              <option
                value="Dhaka"
              >
                Dhaka
              </option>
              <option value="Khulna">Khulna</option>
            </select>
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              required
              name="address"
              placeholder="Address"
              id="address"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
