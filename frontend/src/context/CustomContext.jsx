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
    }
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
