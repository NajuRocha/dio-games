import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, count) => {
    //devuelve true/false si el prod esta en el carrito
    const isInCart = cart.some((prod) => prod.id === product.id);

    if (isInCart) {
      //si esta
      //busca el objeto dentro del carrito
      const prodInCart = cart.find((prod) => prod.id === product.id);
      //suma la cantidad seleccionada al producto en el carrito
      prodInCart.quantity = prodInCart.quantity + count;
      //actualiza el carrito con estos nuevos cambios con su estado
      setCart([...cart]);
    } else {
      //si no esta, agrega el producto al carrito mediante un spread operator
      setCart([...cart, { ...product, quantity: count }]);
    }
  };

  function removeQuantity(prod) {
    if (prod.quantity > 1) {
      prod.quantity = prod.quantity - 1;
      setCart([...cart]);
    }
  }

  function removeItem(prod) {
    setCart(cart.filter((item) => item.id !== prod.id));
  }

  function clear() {
    setCart([]);
  }

  const totalAPagar = cart.reduce(
    (count, prod) => count + prod.price * prod.quantity,
    0
  );

  return (
    <>
      <cartContext.Provider
        value={{
          cart,
          addItem,
          removeItem,
          removeQuantity,
          clear,
          totalAPagar,
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
};
export default CartProvider;
