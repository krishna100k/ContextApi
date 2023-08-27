import { useState, createContext, useContext } from "react";

export const cartContext = createContext();

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState("");
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(cartContext);
};
