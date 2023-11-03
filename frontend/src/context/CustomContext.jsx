import { useContext, createContext, useState, useEffect } from "react";

const dataContext = createContext();

export const useValue = () => {
  const value = useContext(dataContext);
  return value;
};

export const CustomContext = ({ children }) => {
  const [href, setHref] = useState(null);
  const [user, setUser] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setCart(user.cart);
    } else {
      setCart([]);
    }
  }, [user]);

  useEffect(() => {
    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        user.cart = cart;
        localStorage.setItem("user", JSON.stringify(user));
      }
    }, 1000);
  }, [cart]);

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
    <dataContext.Provider
      value={{
        href,
        setHref,
        user,
        setUser,
        allProducts,
        setAllProducts,
        cart,
        setCart,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
