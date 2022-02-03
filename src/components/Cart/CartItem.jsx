import React from "react";

export const CartItem = ({ producto, cantidad, removeItem }) => {
  return (
    <div>
      <p>{producto.name}</p>
      <p>{producto.price}</p>
      <p>{cantidad}</p>
      <button onClick={removeItem}>Eliminar juego</button>
    </div>
  );
};
