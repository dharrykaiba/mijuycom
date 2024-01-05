import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Construction from "./components/Construction/Construction";
import Carta from "./components/Carta/Carta";
import "./App.scss";
import React from "react";
import Rutas from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        
        <Rutas></Rutas>
      </div>
    </BrowserRouter>
  );
}
