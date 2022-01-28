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

  console.log(
    "type del param",
    typeof itemId,
    "type de idProducto",
    typeof idProducto
  ); // para ver el tipo de dato ya que el find no encontraba el producto
  //use find porque si usaba filter despues tenia que mapear para que renderice.
  //no sabia por que no se veia el prodcto y era eso. El find lo renderiza directamente porque no devuelve un array
  console.log(producto, "el proiducto de itemDetailContainer");

  return (
    <div>
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p style={{ color: "white" }}>Cargando detalles</p>
      )}
    </div>
  );
};
