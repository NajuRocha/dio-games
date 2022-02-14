import React, { useContext } from "react";
import { cartContext } from "../../Context/CartProvider";
import { CartItem } from "./CartItem";
import "./Cart.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clear, removeItem, removeQuantity, totalAPagar } =
    useContext(cartContext);
  console.log(cart);

  function finalizarCompra() {
    Swal.fire("Por favor, complete los datos para finalizar la compra.");
  }

  return (
    <>
      <div className="cart-container">
        <div className="cart-card">
          {cart.length ? (
            cart.map((inCart) => (
              <CartItem
                key={inCart.id}
                producto={inCart}
                removeItem={() => removeItem(inCart)}
                removeQuantity={() => removeQuantity(inCart)}
              />
            ))
          ) : (
            <>
              <p>Tu carrito esta vacio.</p>
            </>
          )}
        </div>
        <div>
          {cart.length ? (
            <>
              <h2>Total a pagar: ${totalAPagar}</h2>
              <Link to={"/Form"}>
                <button
                  className="boton-finalizar-compra"
                  onClick={finalizarCompra}
                >
                  Terminar compra
                </button>
              </Link>
              <button className="boton-vaciar-carrito" onClick={clear}>
                Vaciar carrito
              </button>
            </>
          ) : (
            <Link to={"/"}>
              <button className="boton-finalizar-compra">
                Volver al inicio
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
