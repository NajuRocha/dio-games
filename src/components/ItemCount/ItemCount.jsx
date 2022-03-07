import React from "react";
import { useState } from "react";
import "./ItemCount.css";

export const ItemCount = ({ stock, initial, onAdd, updateStock }) => {
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

        {count === updateStock ? (
          <button disabled className="boton-count" onClick={() => sumar()}>
            +
          </button>
        ) : (
          <button className="boton-count" onClick={() => sumar()}>
            +
          </button>
        )}
      </div>
      {stock === 0 ? (
        <button
          disabled
          style={{ backgroundColor: "red" }}
          className="boton-agregar-carrito"
          onClick={() => onAdd(count)}
        >
          Sin stock
        </button>
      ) : (
        <button className="boton-agregar-carrito" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      )}
    </div>
  );
};
