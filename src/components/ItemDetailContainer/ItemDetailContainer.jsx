import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
// import Productos from "../../Productos.json";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";
import { doc } from "@firebase/firestore";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const productsCollection = db.collection("productos");
    const item = doc(db, "productos", itemId);

    const miProducto = productsCollection.doc(producto.id);

    miProducto
      .get(item)
      .then((snapshot) => {
        if (!snapshot.exists) {
          setProducto(snapshot.data());
        }
      })

      .catch((err) => {
        console.log(err);
      });
  });

  // CODIGO VIEJO

  // const { itemId } = useParams();
  // const idProducto = parseInt(itemId);

  // const arrayProductos = (data) =>
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (data) {
  //         resolve(data);
  //       } else {
  //         reject("No se ha encontrado el producto.");
  //       }
  //     }, 2000);
  //   });

  // useEffect(() => {
  //   arrayProductos(Productos)
  //     .then((result) => setProducto(result.find((i) => i.id === idProducto)))
  //     .catch((err) => console.log(err));
  // }, [idProducto]);

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
