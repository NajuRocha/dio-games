import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
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
    </Link>
  );
};
