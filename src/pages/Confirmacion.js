import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaCheckCircle, FaCopy, FaArrowRight } from "react-icons/fa";

function Confirmacion() {
  const [codigo, setCodigo] = useState("");
  const [animar, setAnimar] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const [countdown, setCountdown] = useState(8);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const cod = location.state?.codigo || "LAV-" + Math.floor(100000 + Math.random() * 900000);
    setCodigo(cod);
    setTimeout(() => setAnimar(true), 300);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          navigate("/seguimiento");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate, location.state]);

  const copiarCodigo = () => {
    navigator.clipboard.writeText(codigo);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center transition-all duration-700 ${animar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Animated check */}
        <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-500 ${animar ? "bg-emerald-500 scale-100" : "bg-gray-200 scale-50"}`}>
          <FaCheckCircle className={`text-white text-5xl transition-all duration-700 ${animar ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">
          Pedido Confirmado!
        </h1>
        <p className="text-gray-500 mb-6">Tu pedido ha sido registrado exitosamente</p>

        {/* Code */}
        <div className="bg-gray-50 rounded-2xl p-5 mb-6">
          <p className="text-sm text-gray-500 mb-2">Tu codigo de seguimiento:</p>
          <p className="text-3xl font-extrabold text-blue-600 font-mono tracking-wider mb-3">{codigo}</p>
          <button
            onClick={copiarCodigo}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              copiado
                ? "bg-emerald-100 text-emerald-700"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            {copiado ? <><FaCheckCircle /> Copiado!</> : <><FaCopy /> Copiar Codigo</>}
          </button>
        </div>

        {/* Actions */}
        <button
          onClick={() => navigate("/seguimiento")}
          className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg flex items-center justify-center gap-2"
        >
          Ir a Seguimiento <FaArrowRight />
        </button>

        <p className="text-gray-400 text-xs mt-4">
          Redirigiendo automaticamente en {countdown}s...
        </p>
      </div>
    </div>
  );
}

export default Confirmacion;
