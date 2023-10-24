import "./shop.css";
import { useValue } from "../../context/CustomContext";
import { useEffect } from "react";

export default function Shop() {
  const { href, setHref } = useValue();

  useEffect(() => {
    setHref("shop");
    return () => {
      setHref(null);
    };
  }, [setHref]);
  console.log(href);

  return <div>Shop</div>;
}
