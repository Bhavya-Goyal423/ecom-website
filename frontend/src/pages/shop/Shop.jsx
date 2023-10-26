import "./shop.css";
import { useValue } from "../../context/CustomContext";
import { useEffect, useState } from "react";
import Product from "../../components/product/product";
import Filter from "../../components/filter/Filter";
// import { useParams, useLocation } from "react-router-dom";

export default function Shop() {
  const { setHref } = useValue();
  const [allProducts, setAllProducts] = useState([]);
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
    <>
      <Filter />
      <div className="product-wrapper">
        {allProducts.map((p) => (
          <Product key={p["_id"]} product={p} />
        ))}
      </div>
    </>
  );
}
