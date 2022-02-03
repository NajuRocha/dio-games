import React, { useState, useEffect } from "react";
import Productos from "../../Productos.json";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const { itemId } = useParams();
  const idProducto = parseInt(itemId);

  const arrayProductos = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se ha encontrado el producto.");
        }
      }, 2000);
    });

  useEffect(() => {
    arrayProductos(Productos)
      .then((result) => setProducto(result.find((i) => i.id === idProducto)))
      .catch((err) => console.log(err));
  }, [idProducto]);

  return (
    <div>
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <h2 style={{ color: "white" }}>Cargando detalles...</h2>
      )}
    </div>
  );
};
