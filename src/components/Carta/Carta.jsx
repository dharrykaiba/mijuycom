import React, { useState, useEffect } from "react";
import "./Carta.scss";

export default function Carta() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/platos.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  return (
    <div className="carta" id="carta">
      <h2>Selecciona tu Plato</h2>
      <div className="platosContainer">
        {data.map((plato) => (
          <div key={plato.id} className="plato">
            <img src={plato.img} alt={plato.title} />
            <h3>{plato.title}</h3>
            <p>{plato.desc}</p>
            <p className="precio">Precio: S/ {plato.precio}</p>
            <a href={plato.link} target="_blank" rel="noreferrer">
              Ordenar Ahora
            </a>
          </div>
        ))}
      </div>

      {/* Espacio adicional al final de la carta */}
      <div className="space"></div>
    </div>
  );
}
