import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Confirmacion.css";

function Confirmacion() {
  const [codigo, setCodigo] = useState("");
  const [animar, setAnimar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Generar código aleatorio
    const randomCode = "LAV-" + Math.floor(100000 + Math.random() * 900000);
    setCodigo(randomCode);

    // Activar animación
    setTimeout(() => {
      setAnimar(true);
    }, 300);

    // Redirigir automáticamente a seguimiento después de 5 segundos
    const timer = setTimeout(() => {
      navigate("/seguimiento", { state: { codigoPedido: randomCode } });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const copiarCodigo = () => {
    navigator.clipboard.writeText(codigo);
    alert("Código copiado al portapapeles ✅");
  };

  return (
    <div className="confirmacion-container">
      <div className={`checkmark-circle ${animar ? "draw" : ""}`}>
        <svg className="checkmark-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className="checkmark-circle-path" cx="26" cy="26" r="25" fill="none"/>
          <path className="checkmark-path" fill="none" d="M14 27l7 7 16-16"/>
        </svg>
      </div>
      <h2>¡Pedido Confirmado!</h2>
      <p>Tu código de seguimiento es:</p>
      <h3 className="codigo">{codigo}</h3>
      <button className="btn-copiar" onClick={copiarCodigo}>
        📋 Copiar Código
      </button>
      <p style={{ fontSize: "12px", marginTop: "5px" }}>
        Serás redirigido a seguimiento en 5 segundos...
      </p>
    </div>
  );
}

export default Confirmacion;
