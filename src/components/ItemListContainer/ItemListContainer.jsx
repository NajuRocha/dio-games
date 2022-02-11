import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getFirestore } from "../../firebase/firebase";

export const ItemListContainer = ({ greeting }) => {
  const { categoriaId } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    if (categoriaId === undefined) {
      const productCollection = db.collection("productos");
      productCollection.get().then((querySnapShot) => {
        setProductos(
          querySnapShot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      });
    } else {
      const productCollection = db
        .collection("productos")
        .where("category", "==", categoriaId);
      productCollection.get().then((querySnapShot) => {
        setProductos(
          querySnapShot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      });
    }
  }, [categoriaId]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{greeting}</h1>

      <p>
        Las mejores ofertas, nuevos juegos, títulos AAA y equipo de juego de
        alta calidad. Compre los videojuegos más vendidos a precios más
        económicos.
      </p>

      <ItemList items={productos} />
    </div>
  );
};
