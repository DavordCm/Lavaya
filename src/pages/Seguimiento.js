import React, { useState } from "react";

function Seguimiento() {
  const [codigoPedido, setCodigoPedido] = useState("");
  const [estado, setEstado] = useState(null);

  // Simulación de búsqueda de estado del pedido
  const buscarPedido = () => {
    if (!codigoPedido.trim()) {
      alert("Por favor ingresa el código del pedido");
      return;
    }

    // Simulación de datos
    const estadosSimulados = {
      "ABC123": "En camino",
      "XYZ789": "Entregado",
      "LMN456": "En preparación",
    };

    setEstado(estadosSimulados[codigoPedido.toUpperCase()] || "No encontrado");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto", textAlign: "center" }}>
      <h1>Seguimiento de Pedido</h1>
      <p>Ingresa tu código de pedido para conocer el estado actual.</p>

      <input
        type="text"
        placeholder="Código del pedido"
        value={codigoPedido}
        onChange={(e) => setCodigoPedido(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "300px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <br />
      <button
        onClick={buscarPedido}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Buscar
      </button>

      {estado && (
        <div style={{ marginTop: "20px" }}>
          <h3>Estado: {estado}</h3>
        </div>
      )}
    </div>
  );
}

export default Seguimiento;
