import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Alitas", "Hamburguesas", "Salchipapas"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/logotipo_sin fondo.png" alt="Mijuy logo" />
        </div>
      </div>
      <div className="right">
        <div className="weapper">
          <h2>¡Bienvenido a Mijuy!</h2>
          <h1>¡Disfruta sabores auténticos! 🍕🍔🎉</h1>
          <h3>Delivery gratis para la Alameda Salaverry y Santa Rita: <span ref={textRef}></span></h3>
          
        </div>
        <a href="#carta">
          <img src="assets/down_red.png" alt="Desplazar hacia abajo" />
        </a>
      </div>
    </div>
  );
}
