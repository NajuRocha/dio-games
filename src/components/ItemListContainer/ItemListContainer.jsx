import { ItemCount } from "../ItemCount/ItemCount";
import Productos from "../../Productos.json";
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

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
      .then((result) => setProductos(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{greeting}</h1>

      {/* Aca va el ItemList, que asigna todos los Item */}

      <ItemCount stock={5} initial={1} />
      <ItemList items={productos} />
    </div>
  );
};
