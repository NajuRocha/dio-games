import Productos from "../../Productos.json";
import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { categoriaId } = useParams();

  const arrayProductos = (data) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject("No se ha encontrado el producto.");
        }
      }, 100);
    });

  useEffect(() => {
    arrayProductos(Productos)
      .then((result) =>
        categoriaId
          ? setProductos(result.filter((c) => c.category === categoriaId))
          : setProductos(Productos)
      )
      .catch((err) => console.log(err));
  }, [categoriaId]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{greeting}</h1>

      {/* Aca va el ItemList, que asigna todos los Item */}
      <p>
        Las mejores ofertas, nuevos juegos, títulos AAA y equipo de juego de
        alta calidad. Compre los videojuegos más vendidos a precios más
        económicos.
      </p>
      <ItemList items={productos} />
    </div>
  );
};
