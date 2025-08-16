// src/pages/Paquete.js
import React from "react";
import { useLocation } from "react-router-dom";

function Paquete() {
  const location = useLocation();
  const { ubicacion, telefono, dni } = location.state || {};

  return (
    <div style={{ padding: "20px" }}>
      <h1>📦 Precio por Paquete</h1>
      <p>Este servicio cobra un precio fijo por bolsa o caja de ropa, sin importar el peso.</p>

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

export default Paquete;
