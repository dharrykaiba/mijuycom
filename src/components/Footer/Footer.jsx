import React from "react";
import { Facebook, Instagram, YouTube } from "@mui/icons-material"; // Importa los íconos
import { TikTokIcon } from "./TikTokIcon"; // Componente TikTok personalizado
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img
            src="assets/logotipo_sin_fondo.png"
            alt="Mijuy Logo"
            className="footer-logo"
          />
          <p>© 2024 Mijuy.com Todos los derechos reservados.</p>
        </div>
        <div className="footer-section">
          <h4>Contáctanos</h4>
          <p>
            WhatsApp:{" "}
            <a
              href="https://api.whatsapp.com/send?phone=51950276474&text=Hola! quiero hacer un pedido"
              className="whatsapp-link"
            >
              +51 950276474
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:mijuycom@gmail.com" className="email-link">
            mijuycom@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <a href="/libro-reclamaciones" className="reclamaciones-link">
            <img
              src="assets/libro-reclamaciones.png" // Ruta de tu imagen
              alt="Libro de Reclamaciones"
              className="reclamaciones-img"
            />
            <p>Ir al Libro de Reclamaciones</p>
          </a>
          <a href="/privacidad">
            <p>Ver Política de Privacidad</p>
          </a>
        </div>
        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-links">
            <a
              href="https://www.facebook.com/mijuycom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="social-icon" />
            </a>
            <a
              href="https://www.tiktok.com/@mijuy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokIcon className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/mijuycom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="social-icon" />
            </a>
            <a
              href="https://www.youtube.com/@Mijuycom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
