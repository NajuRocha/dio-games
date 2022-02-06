import React from "react";
import "./CartItem.css";

export const CartItem = ({ producto, removeItem, removeQuantity }) => {
  return (
    <div className="card-cart-item">
      <div className="cart-detalles">
        <img className="img-detalles" src={producto.img} alt={producto.name} />
        <div className="detalles">
          <p>Nombre: {producto.name}</p>
          <p>Precio Unitario: ${producto.price}</p>
          <p>Cantidad: {producto.quantity}</p>
          <p>Precio Total: ${producto.price * producto.quantity}</p>
        </div>
      </div>

      <div className="card-item-botones">
        {producto.quantity === 1 ? (
          <button className="btn1" disabled onClick={removeQuantity}>
            Restar cantidad
          </button>
        ) : (
          <button className="btn1" onClick={removeQuantity}>
            Restar cantidad
          </button>
        )}

        <button className="btn2" onClick={removeItem}>
          Eliminar juego
        </button>
      </div>
    </div>
  );
};
