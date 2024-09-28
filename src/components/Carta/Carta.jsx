//import { useState } from "react";
import "./Carta.scss";

export default function Carta() {
  const data = [
    /*{
      id: "1",
      icon: "./assets/logo_rojo_naranja_blanco-09.jpg",
      title: "Pizzas",
      link: "#c_pizzas",
      desc: "Escoge la que quieras: Americana, Hawaiana, Pepperoni.",
      img: "./assets/platos/pizzas_todas.png",
    },*/
    {
      id: "2",
      icon: "./assets/logo_rojo_naranja_blanco-09.jpg",
      title: "Alitas",
      link: "#c_alitas",
      desc: "Disfruta de las deliciosas alitas; Broaster, BBQ, Chimichurri.",
      img: "./assets/platos/alitas_todas.png",
    },
    {
      id: "3",
      icon: "./assets/logo_rojo_naranja_blanco-09.jpg",
      title: "Hamburguesas",
      link: "#c_burguer",
      desc: "Elige una de las mas sabrosas hamburguesas de carne.",
      img: "./assets/platos/hamburguesa_todas.png",
    },
    {
      id: "4",
      icon: "./assets/logo_rojo_naranja_blanco-09.jpg",
      title: "Otros",
      link: "#c_otro",
      desc: "Crocantes papitas, las mejores salchichas, espectaculares salchipapas.",
      img: "./assets/platos/otros_todas.png",
    },
  ];

  return (
    <div className="carta" id="carta">
      <div className="upcontainer">
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="imgContainer">
                <img src={d.img} alt="" />
              </div>
              <div className="texto">
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                
                <a class="btn" href={d.link}>Seleccionar</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
