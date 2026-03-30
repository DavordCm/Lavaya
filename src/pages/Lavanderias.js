import React from "react";
import { FaMapMarkerAlt, FaMoneyBillWave, FaWeightHanging, FaCreditCard } from "react-icons/fa";

const lavanderias = [
  {
    nombre: "LavaClean",
    direccion: "Av. Javier Prado 245, San Borja, Lima",
    precio: "S/ 12",
    rangoKilos: "6 - 10 kg",
    pagos: ["BCP", "Yape", "Plin"],
    img: "/lavaclean.png",
    color: "from-blue-500 to-blue-600",
  },
  {
    nombre: "LavaDrop",
    direccion: "Calle Berlin 102, Miraflores, Lima",
    precio: "S/ 15",
    rangoKilos: "4 - 15 kg",
    pagos: ["BCP", "Yape", "Interbank"],
    img: "/lavadrop.png",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    nombre: "LavaFresh",
    direccion: "Jr. Los Pinos 88, Surco, Lima",
    precio: "S/ 10",
    rangoKilos: "5 - 9 kg",
    pagos: ["Yape", "Plin"],
    img: "/lavafresh.png",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    nombre: "LavaMatic",
    direccion: "Av. Angamos 310, San Isidro, Lima",
    precio: "S/ 11",
    rangoKilos: "4 - 6 kg",
    pagos: ["BCP", "Interbank", "Plin"],
    img: "/lavamatic.png",
    color: "from-purple-500 to-purple-600",
  },
];

function Lavanderias() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Nuestras Lavanderias</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Trabajamos con las mejores lavanderias certificadas de Lima
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lavanderias.map((l, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
              <div className={`bg-gradient-to-r ${l.color} p-6 flex items-center gap-4`}>
                <img src={l.img} alt={l.nombre} className="w-16 h-16 rounded-xl object-cover bg-white/20 p-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">{l.nombre}</h3>
                  <p className="text-white/80 text-sm flex items-center gap-1">
                    <FaMapMarkerAlt className="text-xs" /> {l.direccion}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
                      <FaMoneyBillWave /> Precio/kg
                    </div>
                    <p className="text-xl font-bold text-gray-800">{l.precio}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
                      <FaWeightHanging /> Rango
                    </div>
                    <p className="text-xl font-bold text-gray-800">{l.rangoKilos}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                    <FaCreditCard /> Metodos de pago
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {l.pagos.map((pago, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold">
                        {pago}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lavanderias;
