import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
//import Construction from "./components/Construction/Construction";
//import Intro from "./components/Intro/Intro";
import Intro from "./components/Intro/Intro";
import Carta from "./components/Carta/Carta";
import C_Alitas from "./components/C_Alitas/C_Alitas";
import C_Combos from "./components/C_Combos/C_Combos";
import C_Burguer from "./components/C_Burguer/C_Burguer";
import C_Otro from "./components/C_Otro/C_Otro";
//import C_Promos from "./components/C_Promos/C_Promos";
//import C_Pizzas from "./components/C_Pizzas/C_Pizzas";

export default function Rutas() {
  return (
    <Routes>
      <Route path="/whatsapp" element={<Navigate to="https://api.whatsapp.com/send?phone=51950276474&text=Hola!%20quiero%20hacer%20un%20pedido" />} />
      <Route
        index
        path="/"
        element={
          <div className="sections">
            {/*<Construction />*/}
            <Intro />
            {/*<C_Promos />*/}
            <C_Combos />
            <Carta />
            <C_Alitas />
            <C_Burguer />
            <C_Otro />
          </div>
        }
      />
      
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}
