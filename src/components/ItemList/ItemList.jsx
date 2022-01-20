import React from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ items }) => {
  console.log(items, "este es items");
  return (
    <>
      <div className="item-container">
        {items.length ? (
          items.map((item) => <Item item={item} key={item.id} />)
        ) : (
          <h2>Cargando...</h2>
        )}
      </div>
    </>
  );
};
