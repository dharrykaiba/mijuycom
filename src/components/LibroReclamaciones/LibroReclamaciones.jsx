// src/components/LibroReclamaciones/LibroReclamaciones.jsx
import React from "react";
import "./LibroReclamaciones.scss";

const LibroReclamaciones = () => {
  return (
    <div className="libro-reclamaciones">
      <h1>Libro de Reclamaciones</h1>
      <div className="iframe-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScvTAIkko-Hs7BvAoaXi9-ZBRU2chbHx1lOK4ZSqscnkM88tg/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Libro de Reclamaciones"
        >
          Cargando…
        </iframe>
      </div>
    </div>
  );
};

export default LibroReclamaciones;
