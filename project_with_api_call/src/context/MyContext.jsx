import { Children, createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItem] = useState([]);

  const incrementQuantity = (id) => {
    setCartItem((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, qunatity: val.qunatity + 1 } : val;
      });
    });
  };

  const decrementQuantity = (id) => {
    setCartItem((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, qunatity: val.qunatity - 1 } : val;
      });
    });
  };

  return (
    <MyStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItem,
        incrementQuantity,
        decrementQuantity
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
