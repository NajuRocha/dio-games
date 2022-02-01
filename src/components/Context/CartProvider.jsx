import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const añadirCarrito = (producto, count) => {
    setCart([...cart, { item: producto, count: count }]);
  };

  return (
    <>
      <cartContext.Provider value={{ cart, añadirCarrito }}>
        {children}
      </cartContext.Provider>
    </>
  );
};
export default CartProvider;
