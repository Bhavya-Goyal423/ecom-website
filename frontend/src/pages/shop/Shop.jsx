import "./shop.css";
import { useValue } from "../../context/CustomContext";
import { useEffect } from "react";

export default function Shop() {
  const { setHref } = useValue();

  useEffect(() => {
    setHref("shop");
    return () => {
      setHref(null);
    };
  }, [setHref]);

  return <div>Shop</div>;
}
