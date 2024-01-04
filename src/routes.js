import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate  } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Carta from "./components/Carta/Carta";
import C_Alitas from "./components/C_Alitas/C_Alitas";


export default function Rutas() {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={
          <div className="sections">
            <Intro />
            <Carta />
            <C_Alitas/>
          </div>
        }
      />
      <Route
        index
        path="/*"
        element={
          <div className="sections">
            <Navigate to='/'/>
          </div>
        }
      />
      
    </Routes>
  );
}
