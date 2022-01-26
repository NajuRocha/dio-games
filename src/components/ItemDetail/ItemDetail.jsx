import React from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ producto }) => {
  console.log(producto);
  return (
    <div>
      <div className="detalles-container">
        <img className="img" src={producto.img2} alt="imagen de juego" />
        <div className="detalles-informacion">
          <h2>Detalles del producto:</h2>
          <h3>{producto.name}</h3>
          <p>{producto.description}</p>

          <p className="detalles-stock">Stock: {producto.stock}</p>
          <h4>Valor: ${producto.price}</h4>
          <ItemCount stock={producto.stock} initial={1} />
        </div>
      </div>
    </div>
  );
};
