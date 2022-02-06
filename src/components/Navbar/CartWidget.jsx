import React, { useContext } from "react";
import ImagenCarrito from "../../assets/img/carrito-green.png";
import { cartContext } from "../../Context/CartProvider";

export const Cartwidget = () => {
  const { cart } = useContext(cartContext);

  const numeroDeCantidad = cart.reduce(
    (counter, item) => counter + item.quantity,
    0
  );

  return (
    <>
      {cart.length ? (
        <div className="card-widget">
          <p className="productos-carrito">{numeroDeCantidad}</p>
          <img
            className="carrito-imagen"
            src={ImagenCarrito}
            alt="carrito verde"
          />
        </div>
      ) : (
        <p style={{ display: "none" }}>{numeroDeCantidad}</p>
      )}
    </>
  );
};
