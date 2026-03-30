import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTshirt, FaWeightHanging, FaMotorcycle, FaPercentage, FaArrowRight } from "react-icons/fa";

function Servicios() {
  const [activeTab, setActiveTab] = useState("precios");

  const tabs = [
    { id: "precios", label: "Precios", icon: <FaTshirt /> },
    { id: "peso", label: "Por Peso", icon: <FaWeightHanging /> },
    { id: "delivery", label: "Delivery", icon: <FaMotorcycle /> },
    { id: "descuento", label: "Descuentos", icon: <FaPercentage /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Nuestros Servicios</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Precios transparentes y competitivos para cada tipo de prenda
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="pb-20">
          {activeTab === "precios" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { prenda: "Camisa", precio: "S/ 15.00", icon: "👔", color: "from-blue-500 to-blue-600" },
                { prenda: "Pantalon", precio: "S/ 18.00", icon: "👖", color: "from-indigo-500 to-indigo-600" },
                { prenda: "Vestido", precio: "S/ 20.00", icon: "👗", color: "from-purple-500 to-purple-600" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                  <div className={`bg-gradient-to-br ${item.color} p-8 text-center`}>
                    <span className="text-6xl">{item.icon}</span>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.prenda}</h3>
                    <p className="text-3xl font-extrabold text-blue-600">{item.precio}</p>
                    <p className="text-gray-400 text-sm mt-1">por kilo</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "peso" && (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white text-center">
                <h3 className="text-xl font-bold">Precio por Cantidad de Kilos</h3>
              </div>
              <div className="p-6">
                {[
                  { kg: "1 kg", precio: "S/ 15.00" },
                  { kg: "2 kg", precio: "S/ 30.00" },
                  { kg: "5 kg", precio: "S/ 75.00" },
                  { kg: "7 kg", precio: "S/ 105.00" },
                  { kg: "10 kg", precio: "S/ 150.00" },
                ].map((item, i) => (
                  <div key={i} className={`flex justify-between items-center py-4 ${i !== 4 ? "border-b border-gray-100" : ""}`}>
                    <span className="text-gray-700 font-medium flex items-center gap-2">
                      <FaWeightHanging className="text-blue-500" /> {item.kg}
                    </span>
                    <span className="text-blue-600 font-bold text-lg">{item.precio}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "delivery" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { tipo: "Recojo y Entrega", precio: "S/ 8.00", desc: "Servicio completo ida y vuelta", icon: "🔄" },
                { tipo: "Solo Recojo", precio: "S/ 5.00", desc: "Recogemos en tu domicilio", icon: "📦" },
                { tipo: "Solo Entrega", precio: "S/ 5.00", desc: "Entregamos en tu puerta", icon: "🚚" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all">
                  <span className="text-5xl block mb-4">{item.icon}</span>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{item.tipo}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                  <p className="text-2xl font-extrabold text-blue-600">{item.precio}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "descuento" && (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 text-white text-center">
                  <h3 className="text-xl font-bold">Descuentos por Volumen</h3>
                  <p className="text-emerald-100 text-sm mt-1">Mientras mas kilos, mas ahorras</p>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { rango: "5 a 9 kg", desc: "10%", bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100" },
                    { rango: "10 a 19 kg", desc: "15%", bg: "bg-blue-50", text: "text-blue-700", badge: "bg-blue-100" },
                    { rango: "20+ kg", desc: "20%", bg: "bg-purple-50", text: "text-purple-700", badge: "bg-purple-100" },
                  ].map((item, i) => (
                    <div key={i} className={`${item.bg} rounded-xl p-5 flex justify-between items-center`}>
                      <span className={`font-semibold ${item.text}`}>{item.rango}</span>
                      <span className={`${item.badge} ${item.text} px-4 py-2 rounded-full font-bold text-lg`}>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center pb-16">
          <Link to="/solicitar" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Solicitar Servicio <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
