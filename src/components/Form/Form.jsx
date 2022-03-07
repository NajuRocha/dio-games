import React, { useRef, useState, useContext } from "react";
import firebase from "firebase";
import { getFirestore } from "../../firebase/firebase";
import { cartContext } from "../../Context/CartProvider";
import Swal from "sweetalert2";
import "./Form.css";

export const Form = () => {
  const { cart, totalAPagar, clear } = useContext(cartContext);

  const [orderId, setOrderId] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const dniRef = useRef();
  const mobileRef = useRef();
  const cardRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();

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
      items: cart.length,
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

    clear();
  };

  let inputStyle = {
    color: "white",
    width: "60%",
    borderRadius: "5px",
    padding: "5px",
  };

  return (
    <>
      {orderId && <h1>ID de compra: {orderId}</h1>}

      <div>
        <form id="my-form" className="formulario" onSubmit={handleClick}>
          <input
            style={inputStyle}
            type="text"
            name="name"
            ref={nameRef}
            placeholder="Nombre y Apellido"
            required
          />
          <br />
          <input
            style={inputStyle}
            type="text"
            name="email"
            ref={emailRef}
            placeholder="Correo electronico"
            required
          />
          <br />
          <input
            style={inputStyle}
            type="text"
            name="dni"
            ref={dniRef}
            placeholder="Documento"
          />
          <br />
          <input
            style={inputStyle}
            type="text"
            name="mobile"
            ref={mobileRef}
            placeholder="Numero de telefono"
            required
          />
          <br />
          <input
            style={inputStyle}
            type="text"
            name="credit"
            ref={cardRef}
            placeholder="Numero de tarjeta"
            required
          />
          <br />
          <button
            className="botonFinalizar"
            type="submit"
            disabled={cart.length === 0}
          >
            Finalizar
          </button>
        </form>
      </div>
    </>
  );
};
