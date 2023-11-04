import "./curProduct.css";
import { useParams } from "react-router-dom";
import { useValue } from "../../context/CustomContext";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CurProduct() {
  const [quantity, setQuantity] = useState(1);
  const { allProducts, setCart } = useValue();
  const productId = useParams().id;
  const CurProduct = allProducts.find((p) => p["_id"] === productId);

  const handleRatingInc = () => {
    if (quantity === CurProduct.stock) return;
    setQuantity((val) => val + 1);
  };

  const handleRatingDec = () => {
    if (quantity === 1) return;
    setQuantity((val) => val - 1);
  };

  const handleAddItem = async (itemId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return toast.info("You must login first");

    const res = await fetch(
      `https://ecom-chair.onrender.com/user/${user.id}/${itemId}?quantity=${quantity}`,
      {
        method: "PATCH",
      }
    );
    const result = await res.json();

    if (result.status === "Success") {
      setCart(result.result.cart);
    }
    setQuantity(1);
  };

  if (allProducts.length < 1) return "";

  return (
    <>
      <div className="section-cur-product">
        <div className="cur-product-details">
          <div className="product-images">
            {CurProduct.images.map((img, idx) => (
              <div className="product-image" key={idx}>
                <img src={img} />
              </div>
            ))}
          </div>
        </div>
        <div className="prodcut-buy-section">
          <p className="product-name cur-product-name">{CurProduct.name}</p>
          <p className="product-price cur-product-price">
            Rs. {CurProduct.price}
          </p>
          <div className="quantity-wrapper">
            <button className="subtract" onClick={() => handleRatingDec()}>
              {" "}
              -{" "}
            </button>
            <p className="quantity">{quantity}</p>
            <button className="add" onClick={() => handleRatingInc()}>
              {" "}
              +{" "}
            </button>
          </div>
          {CurProduct.stock === 0 ? (
            "Out of Stock"
          ) : (
            <button
              className="btn btn-add-to-cart"
              onClick={() => {
                handleAddItem(productId);
              }}
            >
              Add to Cart
            </button>
          )}
          <div className="reviews">
            <h3 className="heading heading-reviews">Reviews</h3>
            {CurProduct.reviews.map((rev) => (
              <div className="all-reviews" key={rev["_id"]}>
                <div className="review">
                  <p className="rev-username">{rev.userName}</p>
                  <p className="rating">
                    {rev.rating}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 72 72"
                      className="star-icon"
                    >
                      <path
                        fill="#FCEA2B"
                        d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                      />
                      <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                      />
                    </svg>
                  </p>
                </div>
                <p className="rev-review">{rev.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
