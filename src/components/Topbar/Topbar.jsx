import React from "react";
import "./Topbar.scss";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

export default function Topbar() {
  return (
    <div className="topbar">
      <a href="#intro" className="logo">
        mijuy.com
      </a>
      <div className="itemContainer">
        <span>Escríbenos:  </span>
        <DeliveryDiningIcon className="icon" />
        <a
          href="https://api.whatsapp.com/send?phone=51950276474&text=Hola! quiero hacer un pedido"
          className="whatsapp-link"
        >
          950 276 474
        </a>
        <div className="itemContainer2">
          
          <span>¡Sabores únicos! Ordena en línea.</span>
        </div>
      </div>
    </div>
  );
}
