import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
//import Construction from "./components/Construction/Construction";
import Intro from "./components/Intro/Intro";
import Carta from "./components/Carta/Carta";
import C_Alitas from "./components/C_Alitas/C_Alitas";
import C_Burguer from "./components/C_Burguer/C_Burguer";
import C_Extra from "./components/C_Extra/C_Extra";
import C_Pizzas from "./components/C_Pizzas/C_Pizzas";

export default function Rutas() {
  return (
    <Routes>
      <Route path="/pedido" element={<Navigate to="/" />} />

      <Route
        index
        path="/"
        element={
          <div className="sections">
            {/*<Construction />*/}
            <Intro />
            <Carta />
            <C_Alitas />
            <C_Burguer />
            <C_Extra />
            <C_Pizzas />
          </div>
        }
      />
    </Routes>
  );
}
