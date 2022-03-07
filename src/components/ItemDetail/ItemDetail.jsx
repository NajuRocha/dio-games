import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartProvider";

export const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(null);
  const [mostrarCount, setMostrarCount] = useState(true);

  const { addItem, cart } = useContext(cartContext);

  function onAdd(cantidad) {
    setCantidad(cantidad);
    addItem(producto, cantidad);
    setMostrarCount(false);
  }

  const isInCart = cart.find((p) => p.id === producto.id);
  const update = () => {
    if (isInCart) {
      const updateStock = isInCart.stock - isInCart.quantity;
      return updateStock;
    }
  };

  return (
    <>
      <div className="detalles-container">
        <img className="img" src={producto.img} alt="imagen de juego" />
        <div className="detalles-informacion">
          <h2>Detalles del producto:</h2>
          <h3>{producto.name}</h3>
          <p>{producto.description}</p>

          {isInCart ? (
            <p className="detalles-stock">Stock: {update()}</p>
          ) : (
            <p className="detalles-stock">Stock: {producto.stock}</p>
          )}

          <h4>Valor: ${producto.price}</h4>

          {mostrarCount ? (
            <ItemCount
              onAdd={onAdd}
              stock={producto.stock}
              initial={1}
              updateStock={update()}
            />
          ) : (
            <>
              <div>
                <p
                  style={{ marginBottom: "0.5rem" }}
                >{`Elegiste ${cantidad} producto/s`}</p>
                <Link className="boton-agregar-carrito" to={"/Cart"}>
                  Ir al carrito
                </Link>
                <Link className="boton-agregar-carrito" to={"/"}>
                  Seguir comprando
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
