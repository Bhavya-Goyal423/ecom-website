import "./cart.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { useValue } from "../../context/CustomContext";

export default function Cart() {
  const [cart, setCurCart] = useState([]);
  const [userCart, setUserCart] = useState([]);
  const [deliveryOption, setDelieveryOption] = useState("150");
  const [noUser, setNoUser] = useState(false);
  const { setCart } = useValue();
  const [isRemoved, setIsRemoved] = useState(false);
  const [loading, setLoading] = useState(false);

  let totalPrice = 0;

  const couponRef = useRef();

  const handleCoupon = () => {
    couponRef.current.classList.remove("hidden");
  };

  const handleRemove = async (prodId) => {
    setIsRemoved(false);
    const user = JSON.parse(localStorage.getItem("user"));

    const userId = user.id;
    const res = await fetch(`http://localhost:3000/user/${userId}/${prodId}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.status === "success") {
      const userCart = user.cart;
      const filteredUserCart = userCart.filter((el) => el.prodId !== prodId);
      setCart(filteredUserCart);
      setIsRemoved(true);
    } else {
      console.log("some error occured");
    }
  };

  const fetchProducts = async (id) => {
    const res = await fetch(`http://localhost:3000/product/${id}`, {
      method: "GET",
    });
    const result = await res.json();
    return result.data;
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      console.log("In use effect");
      const isItem = JSON.parse(localStorage.getItem("user"));
      if (!isItem) {
        setNoUser(true);
        return;
      }
      const itemCart = JSON.parse(localStorage.getItem("user")).cart.map(
        (el) => el.prodId
      );
      console.log(itemCart);

      setUserCart(JSON.parse(localStorage.getItem("user")).cart);
      const fetchAllProducts = async () => {
        const promises = itemCart.map((item) => fetchProducts(item));
        const results = await Promise.all(promises);
        setCurCart(results);
        console.log(results);
        setLoading(false);
      };
      fetchAllProducts();
    }, 0);
  }, []);

  if (noUser) return <h1>You Must Login First</h1>;
  if (loading) return <h1>Loading</h1>;

  return (
    <div className="cart-section">
      <div className="cart">
        <div className="cart-heading">
          <h3 className="heading heading-cart">Shopping Cart</h3>
          <p>
            <strong>{cart.length} items</strong>
          </p>
        </div>
        <div className="all-products">
          <div style={{ marginBottom: "1.2rem", fontWeight: "600" }}>
            Product
          </div>
          <div
            className="quan"
            style={{ marginBottom: "1.2rem", fontWeight: "600" }}
          >
            Quantity
          </div>
          <div
            className="pri"
            style={{ marginBottom: "1.2rem", fontWeight: "600" }}
          >
            Price
          </div>
          <div style={{ marginBottom: "1.2rem", fontWeight: "600" }}>Total</div>
          {cart.map((item, idx) => {
            const amount = userCart.find(
              (el) => el.prodId === item["_id"]
            ).quantity;
            totalPrice += item.price * amount;

            return (
              <React.Fragment key={idx}>
                <div className="product-detail-cart">
                  <img src={item.thumbnail} alt="" />
                  <div className="product-det">
                    <p className="item-name">{item.name}</p>
                    <p
                      className="remove"
                      onClick={() => {
                        handleRemove(item["_id"]);
                      }}
                    >
                      Remove
                    </p>
                  </div>
                </div>
                <div className="quantity-cart">
                  <p className="quantity">
                    {userCart.find((el) => el.prodId === item["_id"]).quantity}
                  </p>
                </div>
                <div className="price">Rs {item.price}</div>
                <div className="total-product">Rs {item.price * amount}</div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="order-summary">
        <h3 className="heading summary-cart-heading">Order Summary</h3>
        <div className="order-total">
          <p className="item-total">ITEMS {cart.length}</p>
          <p className="total-price">Rs {totalPrice}</p>
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
          <p className="invalid hidden" ref={couponRef}>
            INVALID PROMOCODE
          </p>
          <button className="btn btn-apply" onClick={handleCoupon}>
            APPLY
          </button>
        </div>
        <div className="checkout">
          <p className="total-cost">TOTAL COST</p>
          <p className="total">{totalPrice + +deliveryOption}</p>
        </div>
        <button className="btn btn-checkout">CHECKOUT</button>
      </div>
    </div>
  );
}
