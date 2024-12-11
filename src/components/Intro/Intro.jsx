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
      strings: ["Pizzas", "Alitas", "Hamburguesas", "Salchipapas"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/logotipo_sin fondo.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="weapper">
          <h2>¡ Bienvenido a Mijuy !</h2>
          <h1>¡Despliega hacia abajo y sumérgete en una experiencia única! Disfruta de sabores auténticos en cada bocado. 🍕🍔🎉</h1>
          <h1>Tambien estamos por TELEGRAM: 950276474</h1>
          <h3>
            Aprovecha nuestros descuentos del 20% en varios platos, delivery Gratis para la Alameda Salaverry y Santa Rita: <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#carta">
          <img src="assets/down_red.png" alt="" />
        </a>
      </div>
    </div>
  );
}
