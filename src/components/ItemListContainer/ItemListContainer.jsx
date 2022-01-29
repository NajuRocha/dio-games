import Productos from "../../Productos.json";
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { categoriaId } = useParams();

  const arrayProductos = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          let productoEncontrado = Productos.filter(
            (c) => c.category === categoriaId
          );
          resolve(productoEncontrado);
        } else {
          reject("No se ha encontrado el producto.");
        }
      }, 2000);
    });

  useEffect(() => {
    arrayProductos
      .then((result) =>
        categoriaId ? setProductos(result) : setProductos(Productos)
      )
      .catch((err) => console.log(err));
  }, [categoriaId]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{greeting}</h1>

      {/* Aca va el ItemList, que asigna todos los Item */}

      <ItemList items={productos} />
    </div>
  );
};
