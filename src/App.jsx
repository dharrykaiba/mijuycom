import React, { useEffect } from "react";
import "./App.scss";
import Intro from "./components/Intro/Intro";
import Carta from "./components/Carta/Carta";
import Footer from "./components/Footer/Footer";

export default function App() {
  useEffect(() => {
    // Función para forzar que la primera sección ocupe toda la pantalla
    const handleScroll = () => {
      const firstSection = document.querySelector('.sections > *:first-child');
      // Verificamos si el scroll ha llegado a la primera sección
      if (window.scrollY >= firstSection.offsetTop) {
        // Si es así, forzamos que la primera sección tenga una altura del 100vh
        firstSection.style.height = '100vh';
      }
    };

    window.addEventListener('scroll', handleScroll); // Agregamos el event listener
    return () => window.removeEventListener('scroll', handleScroll); // Limpiamos el event listener
  }, []);

  return (
    <div className="App">
      <div className="sections">
        <Intro />
        <Carta />
        <Footer /> {/* El footer ahora es parte del flujo normal */}
      </div>
    </div>
  );
}
