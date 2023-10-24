import { useContext, createContext, useState } from "react";

const dataContext = createContext();

export const useValue = () => {
  const value = useContext(dataContext);
  return value;
};

export const CustomContext = ({ children }) => {
  const [href, setHref] = useState(null);

  return (
    <dataContext.Provider value={{ href, setHref }}>
      {children}
    </dataContext.Provider>
  );
};
