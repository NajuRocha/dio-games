import React from "react";
import "./Footer.css";
import { ImagenesRedes } from "./Redes";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <p>DIO GAMES</p>
        <p>COPYRIGHT © 2022 DIOGAMES DERECHOS RESERVADOS</p>
      </div>
      <div className="footer2">
        <ImagenesRedes />
      </div>
    </div>
  );
};
