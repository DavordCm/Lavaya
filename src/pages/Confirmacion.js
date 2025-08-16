import React, { useEffect, useState } from "react";
import "../styles/Confirmacion.css";

function Confirmacion() {
  const [codigo, setCodigo] = useState("");
  const [animar, setAnimar] = useState(false);

  useEffect(() => {
    // Generar código aleatorio
    const randomCode = "LAV-" + Math.floor(100000 + Math.random() * 900000);
    setCodigo(randomCode);

    // Activar animación
    setTimeout(() => {
      setAnimar(true);
    }, 300);
  }, []);

  return (
    <div className="confirmacion-container">
      <div className="checkmark-circle">
        <svg
          className={`checkmark-svg ${animar ? "draw" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark-circle-path"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark-path"
            fill="none"
            d="M14 27l7 7 16-16"
          />
        </svg>
      </div>
      <h2>¡Pedido Confirmado!</h2>
      <p>Tu código de seguimiento es:</p>
      <h3 className="codigo">{codigo}</h3>
      <button onClick={() => (window.location.href = "/seguimiento")}>
        Ver Seguimiento
      </button>
    </div>
  );
}

export default Confirmacion;
