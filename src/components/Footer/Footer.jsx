//src/components/Footer/App.css
import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src="assets/logotipo_sin fondo.png" alt="Mijuy Logo" className="footer-logo" />
        <p>© 2024 Mijuy. Todos los derechos reservados.</p>
      </div>
      <div className="footer-section">
        <h4>Contáctanos</h4>
        <p>WhatsApp: +51 950276474</p>
        <p>Email: contacto@mijuy.com</p>
      </div>
      <div className="footer-section">
        <h4>Libro de Reclamaciones</h4>
        <a href="/libro-reclamaciones">Ir al Libro de Reclamaciones</a>
      </div>
    </footer>
  );
}
