import React, { useState } from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(null);
  const [mostrarCount, setMostrarCount] = useState(true);

  function onAdd(cantidad) {
    setCantidad(cantidad);
    setMostrarCount(false);
  }

  console.log(cantidad, "esto es cantidada");

  return (
    <div className="detalles-container">
      <img className="img" src={producto.img} alt="imagen de juego" />
      <div className="detalles-informacion">
        <h2>Detalles del producto:</h2>
        <h3>{producto.name}</h3>
        <p>{producto.description}</p>

        <p className="detalles-stock">Stock: {producto.stock}</p>
        <h4>Valor: ${producto.price}</h4>
        {mostrarCount ? (
          <ItemCount onAdd={onAdd} stock={producto.stock} initial={1} />
        ) : (
          <>
            <button className="boton-agregar-carrito">{`Elegiste ${cantidad} producto/s`}</button>
            <Link to={"/Cart"}>Ir al carrito</Link>
          </>
        )}
      </div>
    </div>
  );
};
