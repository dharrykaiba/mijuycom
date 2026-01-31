import React, { useState, useEffect } from "react";
import "./Carta.scss";

export default function Carta() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    fetch("/data/platos2025.json")
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data
          .filter((plato) => plato.vigente)
          .sort((a, b) => (b.promocion ? 1 : 0) - (a.promocion ? 1 : 0));

        setData(sortedData);
        setFilteredData(sortedData);
      })
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  const handleFilter = (type) => {
    setSelectedType(type);
    setFilteredData(
      data
        .filter(
          (plato) => plato.vigente && (type === "" || plato.tipo === type)
        )
        .sort((a, b) => (b.promocion ? 1 : 0) - (a.promocion ? 1 : 0))
    );
  };

  const promociones = filteredData.filter((plato) => plato.promocion);

  const renderBoton = (plato) => {
    if (plato.stock <= 1) {
      return (
        <button className="agotado" disabled>
          No disponible
        </button>
      );
    }

    return (
      <a
        href={plato.link}
        target="_blank"
        rel="noreferrer"
        className="ordenar"
      >
        Ordenar ahora
      </a>
    );
  };

  return (
    <div className="carta" id="carta">
      {/* Filtros */}
      <div className="filterButtons">
        <button
          className={selectedType === "" ? "active" : ""}
          onClick={() => handleFilter("")}
        >
          Todos
        </button>
        <button
          className={selectedType === "Alitas" ? "active" : ""}
          onClick={() => handleFilter("Alitas")}
        >
          Alitas
        </button>
        <button
          className={selectedType === "Hamburguesas" ? "active" : ""}
          onClick={() => handleFilter("Hamburguesas")}
        >
          Hamburguesas
        </button>
        <button
          className={selectedType === "Salchipapas" ? "active" : ""}
          onClick={() => handleFilter("Salchipapas")}
        >
          Salchipapas
        </button>
      </div>

      {/* Promociones */}
      {promociones.length > 0 && (
        <div className="promocionesContainer">
          <h2>Platos en Promoción</h2>
          <div className="platosContainer">
            {promociones.map((plato) => (
              <div
                key={plato.id}
                className={`plato promocion ${
                  plato.stock <= 1 ? "no-disponible" : ""
                }`}
              >
                <img src={plato.img} alt={plato.title} />
                <h3>{plato.title}</h3>
                <p>{plato.desc}</p>
                <p className="precio">Precio: S/ {plato.precio}</p>
                {renderBoton(plato)}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Platos regulares */}
      <div className="platosContainer">
        {filteredData
          .filter((plato) => !plato.promocion)
          .map((plato) => (
            <div
              key={plato.id}
              className={`plato ${
                plato.stock <= 1 ? "no-disponible" : ""
              }`}
            >
              <img src={plato.img} alt={plato.title} />
              <h3>{plato.title}</h3>
              <p>{plato.desc}</p>
              <p className="precio">Precio: S/ {plato.precio}</p>
              {renderBoton(plato)}
            </div>
          ))}
      </div>

      <div className="space"></div>
    </div>
  );
}
