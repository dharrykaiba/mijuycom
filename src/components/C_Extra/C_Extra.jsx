import { useState } from "react";
import "./C_Extra.scss";

export default function C_Extra() {
  const data = [
    {
      id: "1",
      icon: "./assets/logo_rojo_naranja_blanco-09.jpg",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "./assets/logo_rojo_naranja_blanco-09.jpg",
    },
    {
      id: "2",
      icon: "./assets/logo_rojo_naranja_blanco-09.jpg",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "./assets/logotipo_naranja.png",
    },
    {
      id: "3",
      icon: "./assets/logo_rojo_naranja_blanco-09.jpg",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "./assets/logotipo_rojo_redondo.png",
    },
    {
      id: "4",
      icon: "./assets/logo_rojo_naranja_blanco-09.jpg",
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "./assets/logotipo_rojo_redondo.png",
    },
  ];

  return (
    <div className="c_extra" id="c_extra">
      {data.map((d) => (
        <div className="container">
          <div className="item">
            <div className="imgContainer">
              <img src={d.img} alt="" />
            </div>
            <div className="texto">
              <h2>{d.title}</h2>
              <p>{d.desc}</p>
              <button class="btn primary btn-block">Primary</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
