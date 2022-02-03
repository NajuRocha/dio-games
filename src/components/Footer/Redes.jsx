import ImagenYoutube from "../../assets/img/youtube.png";
import ImagenFacebook from "../../assets/img/facebook.png";
import ImagenWhatsapp from "../../assets/img/whatsapp.png";
import "./Redes.css";

export const ImagenesRedes = () => {
  return (
    <div className="redes-sociales">
      <img className="red" src={ImagenYoutube} alt="yt" />
      <img className="red" src={ImagenFacebook} alt="fb" />
      <img className="red" src={ImagenWhatsapp} alt="wp" />
    </div>
  );
};
