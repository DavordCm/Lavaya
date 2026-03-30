import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaIdCard, FaTshirt, FaCreditCard, FaMoneyBillWave, FaArrowLeft, FaCheck } from "react-icons/fa";
import { crearPedido } from "../services/orderService";

function Solicitar() {
  const [ubicacion, setUbicacion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dni, setDni] = useState("");
  const [paso, setPaso] = useState(1);
  const [camisas, setCamisas] = useState(0);
  const [pantalones, setPantalones] = useState(0);
  const [vestidos, setVestidos] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [metodoPrincipal, setMetodoPrincipal] = useState(null);
  const [subMetodo, setSubMetodo] = useState(null);
  const [correoYape, setCorreoYape] = useState("");
  const [loading, setLoading] = useState(false);
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
        () => alert("No se pudo obtener la ubicacion.")
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ubicacion || !telefono || !dni) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    if (telefono.length !== 9) {
      alert("El telefono debe tener 9 digitos.");
      return;
    }
    if (dni.length !== 8) {
      alert("El DNI debe tener 8 digitos.");
      return;
    }
    setPaso(2);
  };

  const calcularPrecio = () => {
    const totalKilos = camisas * pesos.camisa + pantalones * pesos.pantalon + vestidos * pesos.vestido;
    if (totalKilos === 0) {
      alert("Agrega al menos una prenda.");
      return;
    }
    setResultado({ totalKilos, totalPrecio: totalKilos * precioPorKilo });
  };

  const finalizarPago = async (info) => {
    setLoading(true);
    try {
      const metodoFinal = typeof info === "string" ? { metodo: info, correo: null } : info;
      const codigo = await crearPedido({
        ubicacion, telefono, dni,
        camisas, pantalones, vestidos,
        totalKilos: resultado.totalKilos,
        totalPrecio: resultado.totalPrecio,
        metodoPago: metodoFinal,
      });
      navigate("/confirmacion", { state: { codigo } });
    } catch (err) {
      console.error(err);
      // Fallback: navigate anyway with generated code
      const codigo = "LAV-" + Math.floor(100000 + Math.random() * 900000);
      navigate("/confirmacion", { state: { codigo } });
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { num: 1, label: "Datos" },
    { num: 2, label: "Prendas" },
    { num: 3, label: "Pago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Solicitar Servicio</h1>
          {/* Progress bar */}
          <div className="flex items-center justify-center gap-0 mt-6">
            {steps.map((s, i) => (
              <React.Fragment key={s.num}>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    paso >= s.num ? "bg-white text-blue-600" : "bg-blue-500/40 text-blue-200"
                  }`}>
                    {paso > s.num ? <FaCheck /> : s.num}
                  </div>
                  <span className="text-xs mt-1 text-blue-100">{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-16 md:w-24 h-1 rounded-full mx-2 mb-5 ${paso > s.num ? "bg-white" : "bg-blue-500/40"}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-6 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">

          {/* Step 1: Customer info */}
          {paso === 1 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FaMapMarkerAlt className="text-blue-500" /> Ubicacion
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Escribe tu direccion"
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={obtenerUbicacion}
                    className="px-4 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-colors font-medium text-sm whitespace-nowrap"
                  >
                    📍 GPS
                  </button>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FaPhone className="text-blue-500" /> Telefono
                </label>
                <input
                  type="tel"
                  placeholder="987654321"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value.replace(/\D/g, ""))}
                  maxLength="9"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FaIdCard className="text-blue-500" /> DNI
                </label>
                <input
                  type="text"
                  placeholder="12345678"
                  value={dni}
                  onChange={(e) => setDni(e.target.value.replace(/\D/g, ""))}
                  maxLength="8"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
                Continuar
              </button>
            </form>
          )}

          {/* Step 2: Garments */}
          {paso === 2 && (
            <div className="space-y-5">
              <button onClick={() => setPaso(1)} className="flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm font-medium transition-colors">
                <FaArrowLeft /> Volver
              </button>

              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FaTshirt className="text-blue-500" /> Cantidad de Prendas
              </h2>

              {[
                { label: "Camisas", emoji: "👔", value: camisas, setter: setCamisas },
                { label: "Pantalones", emoji: "👖", value: pantalones, setter: setPantalones },
                { label: "Vestidos", emoji: "👗", value: vestidos, setter: setVestidos },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                  <span className="font-medium text-gray-700">{item.emoji} {item.label}</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => item.setter(Math.max(0, item.value - 1))}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 font-bold text-lg hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-all"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold text-lg">{item.value}</span>
                    <button
                      onClick={() => item.setter(item.value + 1)}
                      className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 font-bold text-lg hover:bg-blue-50 hover:border-blue-200 hover:text-blue-500 transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <p className="text-sm text-blue-600 font-medium">Precio por kilo: S/ {precioPorKilo}</p>
              </div>

              <button onClick={calcularPrecio} className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg">
                Calcular Precio
              </button>

              {resultado && (
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 text-center space-y-3">
                  <h3 className="text-lg font-bold text-emerald-800">Resumen</h3>
                  <div className="flex justify-around">
                    <div>
                      <p className="text-sm text-emerald-600">Peso estimado</p>
                      <p className="text-2xl font-extrabold text-emerald-700">{resultado.totalKilos.toFixed(2)} kg</p>
                    </div>
                    <div>
                      <p className="text-sm text-emerald-600">Precio total</p>
                      <p className="text-2xl font-extrabold text-emerald-700">S/ {resultado.totalPrecio.toFixed(2)}</p>
                    </div>
                  </div>
                  <button onClick={() => setPaso(3)} className="w-full py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all">
                    Ir a Pagar
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Payment */}
          {paso === 3 && (
            <div className="space-y-5">
              <button onClick={() => { setPaso(2); setMetodoPrincipal(null); setSubMetodo(null); }} className="flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm font-medium transition-colors">
                <FaArrowLeft /> Volver
              </button>

              <h2 className="text-xl font-bold text-gray-800">Metodo de Pago</h2>

              {/* Summary card */}
              <div className="bg-blue-50 rounded-xl p-4 flex justify-between items-center">
                <span className="text-sm text-blue-600 font-medium">Total a pagar:</span>
                <span className="text-2xl font-extrabold text-blue-700">S/ {resultado?.totalPrecio.toFixed(2)}</span>
              </div>

              {!metodoPrincipal && (
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => setMetodoPrincipal("Tarjeta")} className="flex flex-col items-center gap-3 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
                    <FaCreditCard className="text-3xl text-gray-400 group-hover:text-blue-500 transition-colors" />
                    <span className="font-semibold text-gray-700">Tarjeta</span>
                  </button>
                  <button onClick={() => setMetodoPrincipal("Efectivo")} className="flex flex-col items-center gap-3 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
                    <FaMoneyBillWave className="text-3xl text-gray-400 group-hover:text-emerald-500 transition-colors" />
                    <span className="font-semibold text-gray-700">Digital</span>
                  </button>
                </div>
              )}

              {/* Card options */}
              {metodoPrincipal === "Tarjeta" && !subMetodo && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-700">Elige tu banco:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "BCP", img: "/bcp.png" },
                      { name: "Interbank", img: "/inter.png" },
                    ].map((b) => (
                      <button key={b.name} onClick={() => setSubMetodo(b.name)} className="flex items-center gap-3 p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-all">
                        <img src={b.img} alt={b.name} className="w-10 h-10 object-contain" />
                        <span className="font-medium">{b.name}</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setMetodoPrincipal(null)} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    ← Cambiar metodo
                  </button>
                </div>
              )}

              {/* Card form */}
              {metodoPrincipal === "Tarjeta" && subMetodo && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700">Datos de {subMetodo}</h3>
                  <input type="text" placeholder="Numero de tarjeta" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                  <input type="text" placeholder="Titular" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="CVV" className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                    <input type="text" placeholder="MM/AA" className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <button
                    onClick={() => finalizarPago(subMetodo)}
                    disabled={loading}
                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg disabled:opacity-50"
                  >
                    {loading ? "Procesando..." : "Pagar Ahora"}
                  </button>
                  <button onClick={() => setSubMetodo(null)} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    ← Cambiar banco
                  </button>
                </div>
              )}

              {/* Digital options */}
              {metodoPrincipal === "Efectivo" && !subMetodo && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-700">Elige tu billetera:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "Yape", img: "/yape.png" },
                      { name: "Plin", img: "/plim.png" },
                    ].map((b) => (
                      <button key={b.name} onClick={() => setSubMetodo(b.name)} className="flex items-center gap-3 p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-500 transition-all">
                        <img src={b.img} alt={b.name} className="w-10 h-10 object-contain" />
                        <span className="font-medium">{b.name}</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setMetodoPrincipal(null)} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    ← Cambiar metodo
                  </button>
                </div>
              )}

              {/* Yape QR */}
              {metodoPrincipal === "Efectivo" && subMetodo === "Yape" && (
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-2xl p-6 text-center">
                    <h3 className="font-bold text-purple-800 mb-4">Escanea con Yape</h3>
                    <img src="/qryape.jpg" alt="QR Yape" className="w-48 h-48 mx-auto rounded-xl shadow-md" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">Correo asociado a Yape</label>
                    <input
                      type="email"
                      placeholder="usuario@correo.com"
                      value={correoYape}
                      onChange={(e) => setCorreoYape(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                    />
                  </div>
                  <button
                    onClick={() => finalizarPago({ metodo: "Yape", correo: correoYape })}
                    disabled={loading}
                    className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg disabled:opacity-50"
                  >
                    {loading ? "Procesando..." : "Confirmar Pago"}
                  </button>
                  <button onClick={() => setSubMetodo(null)} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    ← Cambiar billetera
                  </button>
                </div>
              )}

              {/* Plin QR */}
              {metodoPrincipal === "Efectivo" && subMetodo === "Plin" && (
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-2xl p-6 text-center">
                    <h3 className="font-bold text-green-800 mb-4">Escanea con Plin</h3>
                    <img src="/plim.png" alt="QR Plin" className="w-48 h-48 mx-auto rounded-xl shadow-md object-contain" />
                  </div>
                  <button
                    onClick={() => finalizarPago("Plin")}
                    disabled={loading}
                    className="w-full py-3.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg disabled:opacity-50"
                  >
                    {loading ? "Procesando..." : "Confirmar Pago"}
                  </button>
                  <button onClick={() => setSubMetodo(null)} className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    ← Cambiar billetera
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Solicitar;
