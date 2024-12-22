import React from "react"; 
import "./App.scss"; 
import Topbar from "./components/Topbar/Topbar"; 
import Intro from "./components/Intro/Intro"; 
import Carta from "./components/Carta/Carta"; 
import Footer from "./components/Footer/Footer";

export default function App() {
  // Eliminar el handleScroll, ya que no es necesario manipular el scroll manualmente
  return (
    <div className="App">
      <Topbar /> {/* Añadimos la Topbar */}
      <div className="sections">
        <Intro />
        <Carta />
        <Footer />
      </div>
    </div>
  );
}
