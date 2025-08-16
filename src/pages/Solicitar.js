import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Solicitar.css";

function Solicitar() {
  const [ubicacion, setUbicacion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState("");
  const [paso, setPaso] = useState(1);

  const [camisas, setCamisas] = useState(0);
  const [pantalones, setPantalones] = useState(0);
  const [vestidos, setVestidos] = useState(0);

  const [resultado, setResultado] = useState(null);

  const [metodoPrincipal, setMetodoPrincipal] = useState(null); // Tarjeta o Efectivo
  const [subMetodo, setSubMetodo] = useState(null); // BCP, Interbank, Yape, Plin

  const navigate = useNavigate();

  const pesos = { camisa: 0.3, pantalon: 0.5, vestido: 0.6 };
  const precioPorKilo = 12;

  const obtenerUbicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUbicacion(`Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`);
        },
        () => {
          alert("No se pudo obtener la ubicación. Por favor, escríbela manualmente.");
        }
      );
    } else {
      alert("Geolocalización no soportada en este navegador.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ubicacion || !telefono || !dni) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    setPaso(2);
  };

  const calcularPrecio = () => {
    const totalKilos =
      camisas * pesos.camisa +
      pantalones * pesos.pantalon +
      vestidos * pesos.vestido;

    const totalPrecio = totalKilos * precioPorKilo;
    setResultado({ totalKilos, totalPrecio });
  };

  const irMetodoPago = () => {
    if (!resultado) return;
    setPaso(3); // Paso 3: selección de método de pago
  };

  const finalizarPago = (metodo) => {
    navigate("/confirmacion", {
      state: {
        ubicacion,
        telefono,
        dni,
        camisas,
        pantalones,
        vestidos,
        totalKilos: resultado.totalKilos,
        totalPrecio: resultado.totalPrecio,
        metodoPago: metodo
      }
    });
  };

  return (
    <div className="solicitar-container">

      {/* Paso 1: Datos del cliente */}
      {paso === 1 && (
        <>
          <h1>Solicitar Servicio</h1>
          <form onSubmit={handleSubmit} className="solicitar-form">
            <label>Ubicación</label>
            <div className="ubicacion-container">
              <input
                type="text"
                placeholder="Escribe tu dirección o usa ubicación automática"
                value={ubicacion}
                onChange={(e) => setUbicacion(e.target.value)}
              />
              <button type="button" onClick={obtenerUbicacion}>
                📍 Usar mi ubicación
              </button>
            </div>

            <label>Teléfono</label>
            <input
              type="tel"
              placeholder="Ej: 987654321"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              maxLength="9"
              pattern="[0-9]{9}"
              required
            />

            <label>DNI</label>
            <input
              type="text"
              placeholder="Ej: 12345678"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              maxLength="8"
              pattern="[0-9]{8}"
              required
            />

            <button type="submit" className="btn-submit">Continuar</button>
          </form>
        </>
      )}

      {/* Paso 2: Cantidad de prendas */}
      {paso === 2 && (
        <>
          <h1>Ingresa la cantidad de prendas</h1>
          <div className="cantidad-prendas">
            <label>Camisas</label>
            <input
              type="number"
              min="0"
              value={camisas}
              onChange={(e) => setCamisas(parseInt(e.target.value))}
            />

            <label>Pantalones</label>
            <input
              type="number"
              min="0"
              value={pantalones}
              onChange={(e) => setPantalones(parseInt(e.target.value))}
            />

            <label>Vestidos</label>
            <input
              type="number"
              min="0"
              value={vestidos}
              onChange={(e) => setVestidos(parseInt(e.target.value))}
            />

            <p>Precio por kilo: S/ {precioPorKilo}</p>

            <button className="btn-submit" onClick={calcularPrecio}>
              Calcular Precio
            </button>

            {resultado && (
              <div className="resultado">
                <h2>Resultado</h2>
                <p>Total estimado de kilos: {resultado.totalKilos.toFixed(2)} kg</p>
                <p>Precio total: S/ {resultado.totalPrecio.toFixed(2)}</p>
                <button className="btn-submit" onClick={irMetodoPago}>Siguiente</button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Paso 3: Selección de método de pago */}
      {paso === 3 && (
        <div className="metodo-pago-container">
          <h1>Selecciona tu método de pago</h1>

          {/* Selección principal: Tarjeta o Efectivo */}
          {!metodoPrincipal && (
            <>
              <button className="btn-submit" onClick={() => setMetodoPrincipal("Tarjeta")}>
                Tarjeta
              </button>
              <button className="btn-submit" onClick={() => setMetodoPrincipal("Efectivo")}>
                Efectivo
              </button>
            </>
          )}

          {/* Opciones tarjeta */}
          {metodoPrincipal === "Tarjeta" && !subMetodo && (
            <>
              <h2>Elige el banco</h2>
              <button className="btn-submit" onClick={() => setSubMetodo("BCP")}>BCP</button>
              <button className="btn-submit" onClick={() => setSubMetodo("Interbank")}>Interbank</button>
            </>
          )}

          {/* Formulario tarjeta */}
          {metodoPrincipal === "Tarjeta" && subMetodo && (
            <div className="pago-tarjeta">
              <h2>Datos de {subMetodo}</h2>
              <input type="text" placeholder="Número de tarjeta" />
              <input type="text" placeholder="Titular" />
              <input type="text" placeholder="CVV" />
              <input type="text" placeholder="Fecha de vencimiento" />
              <button className="btn-submit" onClick={() => finalizarPago(subMetodo)}>Pagar</button>
            </div>
          )}

          {/* Opciones efectivo */}
          {metodoPrincipal === "Efectivo" && !subMetodo && (
            <>
              <h2>Elige el tipo de pago</h2>
              <button className="btn-submit" onClick={() => setSubMetodo("Yape")}>Yape</button>
              <button className="btn-submit" onClick={() => setSubMetodo("Plin")}>Plin</button>
            </>
          )}

          {/* Mostrar QR */}
          {metodoPrincipal === "Efectivo" && subMetodo && (
            <div className="pago-qr">
              <h2>Escanea este QR con {subMetodo}</h2>
              <img src={`/qr-${subMetodo.toLowerCase()}.png`} alt={`QR ${subMetodo}`} />
              <button className="btn-submit" onClick={() => finalizarPago(subMetodo)}>Confirmar Pago</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Solicitar;
