import React from "react";
import "./Topbar.scss";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

export default function Topbar() {
  return (
    <div className="topbar">
      <Link to="/" className="logo">
        {" "}
        {/* Usar Link en lugar de <a> */}
        mijuy.com
      </Link>
      <div className="itemContainer">
        <span>Escríbenos:</span>
        <a
          href="https://api.whatsapp.com/send?phone=51950276474&text=Hola! quiero hacer un pedido"
          className="whatsapp-link"
        >
          <WhatsAppIcon className="icon" />
          950 276 474
        </a>
      </div>
      <div className="itemContainer2">
        <DeliveryDiningIcon className="icon" />
        <span>¡Sabores únicos! Ordena en línea.</span>
      </div>
    </div>
  );
}
