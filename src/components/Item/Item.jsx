import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartProvider";
import "./Item.css";

export const Item = ({ item }) => {
  const { cart } = useContext(cartContext);

  const isInCart = cart.find((p) => p.id === item.id);
  const update = () => {
    if (isInCart) {
      const updateStock = isInCart.stock - isInCart.quantity;
      return updateStock;
    }
  };

  return (
    <Link to={`/item/${item.id}`}>
      <div className="item-card">
        <img className="item-img" src={item.img} alt="foto" />
        <div className="item-info">
          <h3 className="item-name">{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <hr />

          {isInCart ? <p>Stock: {update()}</p> : <p>Stock: {item.stock}</p>}

          <button className="item-btn">Ver detalles</button>
        </div>
      </div>
    </Link>
  );
};
