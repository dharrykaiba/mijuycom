//src/routes.js
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Carta from "./components/Carta/Carta";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import LibroReclamaciones from "./components/LibroReclamaciones/LibroReclamaciones"; // Importamos el nuevo componente

export default function Rutas() {
  return (
    <Routes>
      <Route
        path="/whatsapp"
        element={
          <Navigate to="https://api.whatsapp.com/send?phone=51950276474&text=Hola!%20quiero%20hacer%20un%20pedido" />
        }
      />
      {/* Otras rutas */}
      <Route
        path="/privacidad"
        element={
          <div className="sections">
            {" "}
            <PrivacyPolicy /> <Footer />
          </div>
        }
      />
      <Route
        path="/libro-reclamaciones" // Nueva ruta
        element={
          <div className="sections">
            <LibroReclamaciones /> {/* Insertamos el componente aquí */}
            <Footer />
          </div>
        }
      />
      <Route
        index
        path="/"
        element={
          <div className="sections">
            <Carta />
            <Footer />
          </div>
        }
      />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}
