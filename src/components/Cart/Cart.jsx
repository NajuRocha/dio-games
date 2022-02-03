import React, { useContext } from "react";
import { cartContext } from "../../Context/CartProvider";
import { CartItem } from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const { cart, clear, removeItem } = useContext(cartContext);
  console.log(cart);

  return (
    <>
      <div className="cart-container">
        {cart.length ? (
          cart.map((inCart) => (
            <CartItem
              key={inCart.item.id}
              producto={inCart.item}
              cantidad={inCart.quantity}
              removeItem={() => removeItem(inCart)}
            />
          ))
        ) : (
          <p>Tu carrito esta vacio.</p>
        )}

        <button onClick={clear}>Vaciar carrito</button>
      </div>
    </>
  );
};

export default Cart;
