import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, count) => {
    setCart([...cart, { item: product, quantity: count }]);
  };

  function removeItem(prod) {
    setCart(cart.filter((item) => item.id !== prod.id));
  }

  function clear() {
    setCart([]);
  }

  return (
    <>
      <cartContext.Provider value={{ cart, addItem, removeItem, clear }}>
        {children}
      </cartContext.Provider>
    </>
  );
};
export default CartProvider;
