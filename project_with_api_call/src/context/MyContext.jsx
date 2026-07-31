import { Children, createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const [cartItems, setCartItem] = useState([]);

  return <MyStore.Provider value={{isCartOpen, setIsCartOpen, cartItems, setCartItem}}>{children}</MyStore.Provider>;
};
