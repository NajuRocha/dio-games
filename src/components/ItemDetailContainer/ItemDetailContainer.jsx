import React, { useState, useEffect } from "react";
import Productos from "../../Productos.json";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

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
    arrayProductos(Productos[0])
      .then((result) => setProducto(result))
      .catch((err) => console.log(err));
  }, []);
  return <ItemDetail producto={producto} />;
};
