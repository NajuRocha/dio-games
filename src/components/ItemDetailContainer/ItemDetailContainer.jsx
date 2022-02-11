import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/firebase";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const productsCollection = db.collection("productos");
    const item = productsCollection.doc(itemId);

    item
      .get()
      .then((snapshot) => {
        if (!snapshot.exists) {
          console.log("No hay ID");
        }
        setProducto({ id: itemId, ...snapshot.data() });
      })

      .catch((err) => {
        console.log(err);
      });
  }, [itemId]);

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
