import React, { useState } from "react";
import { FaClipboardList, FaBoxOpen, FaCheckCircle } from "react-icons/fa";
import { GiScooter } from "react-icons/gi";
import "../styles/Seguimiento.css";

function Seguimiento() {
  const [codigoPedido, setCodigoPedido] = useState("");
  const [estadoActual, setEstadoActual] = useState(null);

  const pasos = [
    { nombre: "Pedido recibido", icono: <FaClipboardList /> },
    { nombre: "En preparación", icono: <FaBoxOpen /> },
    { nombre: "En camino", icono: <GiScooter /> },
    { nombre: "Lavado completado", icono: <FaCheckCircle /> },
  ];

  const buscarPedido = () => {
    if (!codigoPedido.trim()) {
      alert("Por favor ingresa el código del pedido");
      return;
    }

    // Simulación de estado aleatorio
    const index = Math.floor(Math.random() * pasos.length);
    setEstadoActual(index);
  };

  const porcentajeCompletado =
    estadoActual !== null ? (estadoActual / (pasos.length - 1)) * 100 : 0;

  return (
    <div className="seguimiento-container">
      <h1>Seguimiento de Pedido</h1>
      <p>Ingresa tu código de pedido para conocer el estado actual.</p>

      <input
        type="text"
        placeholder="Código del pedido"
        value={codigoPedido}
        onChange={(e) => setCodigoPedido(e.target.value)}
        className="seguimiento-input"
      />
      <br />
      <button onClick={buscarPedido} className="seguimiento-btn">
        Buscar
      </button>

      {estadoActual !== null && (
        <div className="progreso-container">
          {/* Línea de fondo */}
          <div className="progreso-linea"></div>
          {/* Barra de progreso verde */}
          <div
            className="progreso-linea-completado"
            style={{ width: `${porcentajeCompletado}%` }}
          ></div>

          {/* Pasos */}
          {pasos.map((paso, index) => {
            let clase = "paso-pendiente";
            if (index < estadoActual) clase = "paso-completado";
            if (index === estadoActual && paso.nombre === "En preparación")
              clase = "paso-preparacion";
            if (index === estadoActual && paso.nombre !== "En preparación")
              clase = "paso-actual";

            return (
              <div key={index} className={`paso ${clase}`}>
                <span className="dot"></span>
                <span className="paso-icon">{paso.icono}</span>
                <span className="paso-texto">{paso.nombre}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Seguimiento;
