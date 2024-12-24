//Carta/Carta.jsx
import React, { useState, useEffect } from "react";
import "./Carta.scss";

export default function Carta() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    fetch("/data/platos.json")
      .then((response) => response.json())
      .then((data) => {
        // Filtrar los platos vigentes y ordenar para mostrar los de promoción primero
        const sortedData = data
          .filter((plato) => plato.vigente) // Filtra los platos vigentes
          .sort((a, b) => (b.promocion ? 1 : 0) - (a.promocion ? 1 : 0)); // Ordena por promoción (true primero)
        setData(sortedData);
        setFilteredData(sortedData); // Establecer los platos filtrados
      })
      .catch((error) => console.error("Error al cargar el JSON:", error));
  }, []);

  const handleFilter = (type) => {
    setSelectedType(type);
    setFilteredData(
      data
        .filter((plato) => plato.vigente && (type === "" || plato.tipo === type)) // Filtrar por tipo y vigencia
        .sort((a, b) => (b.promocion ? 1 : 0) - (a.promocion ? 1 : 0)) // Ordenar por promoción
    );
  };

  const promociones = filteredData.filter((plato) => plato.promocion); // Filtrar platos en promoción

  return (
    <div className="carta" id="carta">
      {/* Botones para filtrar */}
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

      {/* Platos en Promoción, solo se muestra si existen */}
      {promociones.length > 0 && (
        <div className="promocionesContainer">
          <h2>Platos en Promoción</h2>
          <div className="platosContainer">
            {promociones.map((plato) => (
              <div key={plato.id} className="plato promocion">
                <img src={plato.img} alt={plato.title} />
                <h3>{plato.title}</h3>
                <p>{plato.desc}</p>
                <p className="precio">Precio: S/ {plato.precio}</p>
                <a
                  href={plato.link}
                  target="_blank"
                  rel="noreferrer"
                  className={plato.stock <= 1 ? "consultar" : "ordenar"}
                >
                  {plato.stock <= 1 ? "Consultar Pedido" : "Ordenar Ahora"}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Platos regulares */}
      <div className="platosContainer">
        {filteredData
          .filter((plato) => !plato.promocion) // Filtrar platos regulares
          .map((plato) => (
            <div key={plato.id} className="plato">
              <img src={plato.img} alt={plato.title} />
              <h3>{plato.title}</h3>
              <p>{plato.desc}</p>
              <p className="precio">Precio: S/ {plato.precio}</p>
              <a
                href={plato.link}
                target="_blank"
                rel="noreferrer"
                className={plato.stock <= 1 ? "consultar" : "ordenar"}
              >
                {plato.stock <= 1 ? "Consultar Pedido" : "Ordenar Ahora"}
              </a>
            </div>
          ))}
      </div>

      {/* Espacio adicional al final de la carta */}
      <div className="space"></div>
    </div>
  );
}
