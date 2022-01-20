import React from "react";
import "./Item.css";

export const Item = ({ item }) => {
  console.log(item, "este es item");
  return (
    <div className="item-card">
      <img className="item-img" src={item.img} alt="foto" />
      <div className="item-info">
        <h3>{item.name}</h3>
        <p>Precio: ${item.price}</p>
        <hr />
        <p>Stock: {item.stock}</p>
        <button className="item-btn">Ver detalles</button>
      </div>
    </div>
  );
};
