import "./shop.css";
import { useValue } from "../../context/CustomContext";
import { useEffect, useState } from "react";
import Product from "../../components/product/product";
import Filter from "../../components/filter/Filter";
// import { useParams, useLocation } from "react-router-dom";

export default function Shop() {
  const { setHref, allProducts, setAllProducts } = useValue();

  console.log(allProducts);

  useEffect(() => {
    setHref("shop");
    return () => {
      setHref(null);
    };
  }, [setHref]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3000/product/", {
      method: "GET",
    });
    const data = await res.json();
    setAllProducts(data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
