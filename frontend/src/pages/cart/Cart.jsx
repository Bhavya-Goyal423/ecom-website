import "./cart.css";
import { useState } from "react";

export default function Cart() {
  const [deliveryOption, setDelieveryOption] = useState("150");
  const [total, setTotal] = useState(0);
  return (
    <div className="cart-section">
      <div className="cart">
        <div className="cart-heading">
          <h3 className="heading heading-cart">Shopping Cart</h3>
          <p>
            <strong>3 items</strong>
          </p>
        </div>
        <div className="all-products">
          <div style={{ marginBottom: "1.2rem", fontWeight: "600" }}>
            Product
          </div>
          <div style={{ marginBottom: "1.2rem", fontWeight: "600" }}>
            Quantity
          </div>
          <div style={{ marginBottom: "1.2rem", fontWeight: "600" }}>Price</div>
          <div style={{ marginBottom: "1.2rem", fontWeight: "600" }}>Total</div>
          <div className="product-detail-cart">
            <img
              src="https://m.media-amazon.com/images/I/31ruJpwY+8L._SX679_.jpg"
              alt=""
            />
            <div className="product-det">
              <p>PRODUCT NAME</p>
              <p className="remove">Remove</p>
            </div>
          </div>
          <div className="quantity-cart">
            <button> - </button>
            <p className="quantity">1</p>
            <button> + </button>
          </div>
          <div className="price">Rs 230</div>
          <div className="total-product">Rs 460</div>
        </div>
      </div>
      <div className="order-summary">
        <h3 className="heading summary-cart-heading">Order Summary</h3>
        <div className="order-total">
          <p className="item-total">ITEMS 3</p>
          <p className="total-price">Rs 1300</p>
        </div>

        <div className="order-options">
          <label htmlFor="shipping">SHIPPING</label>
          <select
            name="shipping"
            id="shipping"
            className="select"
            value={deliveryOption}
            onChange={(e) => setDelieveryOption(e.target.value)}
          >
            <option value="150">Standard Delievery (8-15 days) - Rs 150</option>
            <option value="450">Premium Delievery (4-7 days) - Rs 450</option>
            <option value="950">One Day Delievery (1 day) - Rs 950</option>
          </select>
          <label htmlFor="promocode">PROMO CODE</label>
          <input type="text" placeholder="Enter your code" id="promocode" />
          <p className="invalid hidden">INVALID PROMOCODE</p>
          <button className="btn btn-apply">APPLY</button>
        </div>
        <div className="checkout">
          <p className="total-cost">TOTAL COST</p>
          <p className="total">{total + +deliveryOption}</p>
        </div>
        <button className="btn btn-checkout">CHECKOUT</button>
      </div>
    </div>
  );
}
