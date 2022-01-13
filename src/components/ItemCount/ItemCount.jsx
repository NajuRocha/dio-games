import React from "react";
import { useState } from "react";
import "./ItemCount.css";
import DarkSouls from "../../assets/juegos/DarkSouls.PNG";

export const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  function onAdd() {
    alert(`Estas agregando ${count} items al carrito`);
  }

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
      <img className="img-juego" src={DarkSouls} alt="darksouls" />
      <div className="counter">
        <button className="boton-count" onClick={() => restar()}>
          -
        </button>

        <p>{count}</p>

        <button className="boton-count" onClick={() => sumar()}>
          +
        </button>
      </div>
      <button className="boton-agregar-carrito" onClick={() => onAdd()}>
        Agregar al carrito
      </button>
    </div>
  );
};
