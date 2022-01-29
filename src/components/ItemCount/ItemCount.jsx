import React from "react";
import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  function sumar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function restar() {
    if (count > initial) {
      setCount(count - 1);
    }
  }

  return (
    <div className="box-counter">
      <div className="counter">
        <button className="boton-count" onClick={() => restar()}>
          -
        </button>

        <p>{count}</p>

        <button className="boton-count" onClick={() => sumar()}>
          +
        </button>
      </div>
      <button className="boton-agregar-carrito" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};
