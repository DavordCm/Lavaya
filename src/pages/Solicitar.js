import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Solicitar.css";

function Solicitar() {
  const [ubicacion, setUbicacion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState("");
  const [paso, setPaso] = useState(1);
  const [servicioSeleccionado, setServicioSeleccionado] = useState("");
  const navigate = useNavigate();

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

  const handleContinuarServicio = () => {
    if (servicioSeleccionado) {
      // En vez de ir a otra página de servicio, mandamos directo a Confirmación
      navigate("/confirmacion", {
        state: { ubicacion, telefono, dni, servicio: servicioSeleccionado }
      });
    }
  };

  return (
    <div className="solicitar-container">
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

      {paso === 2 && (
        <>
          <h1>Elige tu servicio</h1>
          <div className="servicios-botones">
            <label>
              <input
                type="radio"
                name="servicio"
                value="premium"
                onChange={(e) => setServicioSeleccionado(e.target.value)}
              />
              ⭐ Servicio Premium
            </label>

            <label>
              <input
                type="radio"
                name="servicio"
                value="descuento"
                onChange={(e) => setServicioSeleccionado(e.target.value)}
              />
              💰 Descuento por Volumen
            </label>

            <label>
              <input
                type="radio"
                name="servicio"
                value="paquete"
                onChange={(e) => setServicioSeleccionado(e.target.value)}
              />
              📦 Precio por Paquete
            </label>
          </div>

          <button
            className="btn-submit"
            disabled={!servicioSeleccionado}
            onClick={handleContinuarServicio}
          >
            Siguiente
          </button>
        </>
      )}
    </div>
  );
}

export default Solicitar;
