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
      strings: [
        "Pizza Americana",
        "Pizza Hawaiana",
        "Pizza Mijuy de la casa",
        "Hamburguesa Mijuy",
        "Alitas BBQ",
        "Alitas Broasther",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/logotipo_blanco.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="weapper">
          <h2>Bienvenido!,</h2>
          <h1>Proximamente...</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
