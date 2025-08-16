// src/pages/Premium.js
import React from "react";
import { useLocation } from "react-router-dom";

function Premium() {
  const location = useLocation();
  const { ubicacion, telefono, dni } = location.state || {};

  return (
    <div style={{ padding: "20px" }}>
      <h1>⭐ Servicio Premium</h1>
      <p>Este servicio incluye lavado y planchado exprés con recogida y entrega a domicilio.</p>

      <h3>Datos del cliente:</h3>
      <ul>
        <li><b>Ubicación:</b> {ubicacion}</li>
        <li><b>Teléfono:</b> {telefono}</li>
        <li><b>DNI:</b> {dni}</li>
      </ul>

      <button onClick={() => alert("Pedido confirmado ✅")}>
        Confirmar Pedido
      </button>
    </div>
  );
}

export default Premium;
