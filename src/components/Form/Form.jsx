import React, { useRef, useState, useContext } from "react";
import firebase from "firebase";
import { getFirestore } from "../../firebase/firebase";
import { cartContext } from "../../Context/CartProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const Form = () => {
  const { cart, totalAPagar } = useContext(cartContext);

  const [orderId, setOrderId] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const dniRef = useRef();
  const mobileRef = useRef();
  const cardRef = useRef();

  function handleClick() {
    const db = getFirestore();

    const orders = db.collection("orders");

    const miOrden = {
      buyer: {
        name: nameRef.current.value,
        email: emailRef.current.value,
        dni: dniRef.current.value,
        mobile: mobileRef.current.value,
        card: cardRef.current.value,
      },
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalAPagar,
    };

    orders
      .add(miOrden)
      .then(({ id }) => {
        console.log(`Orden ingresada: ` + id);
        setOrderId(id);
      })
      .catch((err) => {
        console.log(err);
      });

    Swal.fire("Gracias por comprar en DIO GAMES");

    cart.forEach((item) => {
      const docRef = db.collection("productos").doc(item.id);
      console.log(item, "referencia");

      docRef
        .update({ stock: item.stock - item.quantity })

        .then(() => {
          console.log("se cambió el stock de los productos");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  return (
    <>
      {orderId && <h1>ID de compra: {orderId}</h1>}

      <div>
        <form>
          <input
            type="text"
            name="name"
            ref={nameRef}
            placeholder="Nombre y Apellido"
            required
          />
          <br />
          <input
            type="text"
            name="email"
            ref={emailRef}
            placeholder="Correo electronico"
            required
          />
          <br />
          <input type="text" name="dni" ref={dniRef} placeholder="Documento" />
          <input
            type="text"
            name="mobile"
            ref={mobileRef}
            placeholder="Numero de telefono"
            required
          />
          <br />
          <input
            type="text"
            name="credit"
            ref={cardRef}
            placeholder="Numero de tarjeta"
            required
          />
          <br />
          <Link to={"/"}>
            <button type="submit" onClick={handleClick}>
              Finalizar
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};
