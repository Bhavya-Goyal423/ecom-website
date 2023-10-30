import "./shop.css";
import { useValue } from "../../context/CustomContext";
import { useEffect } from "react";
import Product from "../../components/product/product";
import Filter from "../../components/filter/Filter";

export default function Shop() {
  const { setHref, allProducts } = useValue();

  useEffect(() => {
    setHref("shop");
    return () => {
      setHref(null);
    };
  }, [setHref]);

  return (
    <div className="shop-wrapper">
      <Filter />
      <div className="shop-main">
        <input
          type="text"
          className="product-search"
          placeholder="search products ..."
        />
        <div className="product-wrapper">
          {allProducts.map((p) => (
            <Product key={p["_id"]} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
