import "./product.css";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <>
      <Link className="product">
        <img src={product.thumbnail} alt={product.name} />
        <div className="product-details">
          <p className="product-name">{product.name}</p>
          <p className="product-price">{product.price}</p>
        </div>
      </Link>
    </>
  );
}
