// src/App.jsx
import React from "react";
import "./App.scss";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import Rutas from "./routes";

export default function App() {
  return (
    <div className="App">
      <Topbar /> {/* Añadimos la Topbar */}
      
        <Rutas /> {/* Renderiza las rutas aquí */}
      

    </div>
  );
}
