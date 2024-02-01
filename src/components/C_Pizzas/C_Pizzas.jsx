import { useState } from "react";
import "./C_Pizzas.scss";

export default function C_Pizzas() {
  const data = [
    {
      id: "1",
      icon: "./assets/logo_rojo_naranja_blanco-09.jpg",
      title: "Americana",
      link: "https://api.whatsapp.com/send?phone=51950276474&text=Hola!, dame una %2APizza Americana%2A%0ATamaño: Personal / Mediana / Familiar %0APago con Yape o Efectivo.",
      desc: "Pizza Americana en versión Personal, Mediana o Familiar. Tú eliges, nosotros entregamos el sabor. 🍕",
      img: "./assets/platos/pizza_americana.png",
      precio: "PER-14.4 MED-20.8 FAM-28.8",
    },
    {
      id: "2",
      icon: "./assets/logo_rojo_naranja_blanco-09.jpg",
      title: "Hawaiana",
      link: "https://api.whatsapp.com/send?phone=51950276474&text=Hola!, dame una %2APizza de Hawaiana%2A%0ATamaño: Personal / Mediana / Familiar %0APago con Yape o Efectivo.",
      desc: "Descubre la exquisita fusión de sabores en nuestra Pizza Hawaiana con piña y durazno. 🍍🍑",
      img: "./assets/platos/pizza_hawaiana.png",
      precio: "PER-16.0 MED-23.2 FAM-33.6",
    },
    {
      id: "3",
      icon: "./assets/logo_rojo_naranja_blanco-09.jpg",
      title: "Pepperoni",
      link: "https://api.whatsapp.com/send?phone=51950276474&text=Hola!, dame una %2APizza de Pepperoni%2A%0ATamaño: Personal / Mediana / Familiar %0APago con Yape o Efectivo.",
      desc: "Disfruta del clásico sabor con nuestra Pizza de Pepperoni. 🍕 ¡Irresistible mezcla de queso y pepperoni!",
      img: "./assets/platos/pizza_pepperoni.png",
      precio: "PER-15.2 MED-22.4 FAM-32.0",
    },
    {
      id: "4",
      icon: "./assets/logo_rojo_naranja_blanco-09.jpg",
      title: "De la Casa",
      link: "https://api.whatsapp.com/send?phone=51950276474&text=Hola!, dame una %2APizza de la Casa%2A%0ATamaño: Personal / Mediana / Familiar %0APago con Yape o Efectivo.",
      desc: "Sumérgete en el auténtico sabor casero con nuestra Pizza de la Casa. 🏡🍕 Llena de salchicha, jamón, aceitunas y champiñones.",
      img: "./assets/platos/pizza_delacasa.png",
      precio: "PER-17.6 MED-25.6 FAM-38.4",
    },
  ];

  return (
    <div className="c_pizzas" id="c_pizzas">
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
                
                
                <a class="btn" target="_blank" href={d.link}>
                  <div className="btnContainer">
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"
                      />
                    </svg>
                    <span>{d.precio} </span>
                  </div>
                </a>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
