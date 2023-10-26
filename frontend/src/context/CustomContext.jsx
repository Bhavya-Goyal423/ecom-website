import { useContext, createContext, useState } from "react";

const dataContext = createContext();

export const useValue = () => {
  const value = useContext(dataContext);
  return value;
};

export const CustomContext = ({ children }) => {
  const [href, setHref] = useState(null);
  const [user, setUser] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  return (
    <dataContext.Provider
      value={{ href, setHref, user, setUser, allProducts, setAllProducts }}
    >
      {children}
    </dataContext.Provider>
  );
};
