// src/pages/Descuento.js
import React from "react";
import { useLocation } from "react-router-dom";

function Descuento() {
  const location = useLocation();
  const { ubicacion, telefono, dni } = location.state || {};

  return (
    <div style={{ padding: "20px" }}>
      <h1>💰 Descuento por Volumen</h1>
      <p>Ideal para clientes que envían más de 10 kg de ropa. Recibe hasta un 20% de descuento.</p>

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

export default Descuento;
