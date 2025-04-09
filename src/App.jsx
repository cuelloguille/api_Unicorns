import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UnicornsContainer from "./components/UnicornsContainerr";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/unicornios" />} />
        <Route path="/unicornios" element={<UnicornsContainer />} />
        {/* Podés agregar más rutas si hacen más vistas, como /about, /contacto, etc */}
      </Routes>
    </Router>
  );
}