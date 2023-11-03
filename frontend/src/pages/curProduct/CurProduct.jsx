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
    console.log(itemId);

    const res = await fetch(
      `http://localhost:3000/user/${user.id}/${itemId}?quantity=${quantity}`,
      {
        method: "PATCH",
      }
    );
    const result = await res.json();
    console.log(result);
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
            <p className="heading">Reviews</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
