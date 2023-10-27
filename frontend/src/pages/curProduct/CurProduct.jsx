import "./curProduct.css";

import { useParams } from "react-router-dom";
import { useValue } from "../../context/CustomContext";
import { useState } from "react";

export default function CurProduct() {
  const [quantity, setQuantity] = useState(1);
  const { allProducts } = useValue();
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

  return (
    <div className="section-cur-product">
      <div className="product-details">
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
        {CurProduct.stock === 0 ? "Out of Stock" : <button>Add to Cart</button>}
      </div>
    </div>
  );
}
