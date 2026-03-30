import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { FaMapMarkedAlt, FaMotorcycle, FaUsers, FaWhatsapp, FaRobot, FaTshirt, FaClock, FaShieldAlt, FaTruck, FaBars, FaTimes, FaStar, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Chatbot from "./components/chatbot";
import Servicios from "./pages/Servicios";
import Solicitar from "./pages/Solicitar";
import Seguimiento from "./pages/Seguimiento";
import Confirmacion from "./pages/Confirmacion";
import Lavanderias from "./pages/Lavanderias";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
      isActive(path)
        ? "bg-blue-600 text-white shadow-lg"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="group">
            <img src="/Lavaya.jpg" alt="LavaYa" className="h-16 w-auto rounded-2xl object-contain shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className={linkClass("/")}>Inicio</Link>
            <Link to="/servicios" className={linkClass("/servicios")}>Servicios</Link>
            <Link to="/seguimiento" className={linkClass("/seguimiento")}>Seguimiento</Link>
            <Link to="/lavanderias" className={linkClass("/lavanderias")}>Lavanderias</Link>
            <Link to="/solicitar" className="ml-3 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Solicitar Ahora
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-2xl text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fadeIn">
            <Link to="/" className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 font-medium" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link to="/servicios" className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 font-medium" onClick={() => setMenuOpen(false)}>Servicios</Link>
            <Link to="/seguimiento" className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 font-medium" onClick={() => setMenuOpen(false)}>Seguimiento</Link>
            <Link to="/lavanderias" className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 font-medium" onClick={() => setMenuOpen(false)}>Lavanderias</Link>
            <Link to="/solicitar" className="block px-4 py-3 bg-blue-600 text-white rounded-xl text-center font-semibold" onClick={() => setMenuOpen(false)}>Solicitar Ahora</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <header className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
        {/* Background image overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-indigo-900/95 z-10"></div>
        {/* Animated blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium text-blue-200 mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Servicio disponible ahora
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
                Ropa limpia
                <span className="block bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent">
                  en tu puerta
                </span>
              </h1>

              <p className="text-xl text-blue-200/80 mb-8 leading-relaxed max-w-lg">
                Recogemos, lavamos y entregamos. Sin esfuerzo, sin preocupaciones. El servicio de lavanderia mas rapido de Lima.
              </p>

              {/* Stats mini */}
              <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["bg-blue-400", "bg-indigo-400", "bg-purple-400", "bg-pink-400"].map((c, i) => (
                      <div key={i} className={`w-8 h-8 ${c} rounded-full border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold`}>
                        {["J", "M", "A", "L"][i]}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="text-white font-bold">+500</span>
                    <span className="text-blue-300"> clientes</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/20"></div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">4.9</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/solicitar" className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 rounded-2xl text-lg font-bold hover:from-yellow-300 hover:to-amber-300 transition-all shadow-xl shadow-yellow-500/25 hover:shadow-yellow-500/40 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  Solicitar Ahora
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/servicios" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center">
                  Ver Precios
                </Link>
              </div>
            </div>

            {/* Right - Visual card */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/80 text-sm font-medium">Pedido reciente</span>
                      <span className="px-3 py-1 bg-green-400/20 text-green-300 rounded-full text-xs font-bold">Completado</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-3xl">
                        🧺
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">8.5 kg de ropa</p>
                        <p className="text-blue-200 text-sm">Lavado + Planchado + Delivery</p>
                      </div>
                    </div>
                  </div>

                  {/* Mini progress */}
                  <div className="space-y-3">
                    {[
                      { text: "Recogido en domicilio", done: true },
                      { text: "Lavado completado", done: true },
                      { text: "Entregado al cliente", done: true },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center">
                          <FaCheckCircle className="text-green-400 text-xs" />
                        </div>
                        <span className="text-white/70 text-sm">{step.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-amber-500 text-gray-900 px-5 py-3 rounded-2xl font-bold shadow-lg shadow-yellow-500/30 transform rotate-3">
                  <span className="text-2xl">S/ 12</span>
                  <span className="text-sm"> /kg</span>
                </div>

                {/* Floating delivery badge */}
                <div className="absolute -bottom-3 -left-3 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-3 rounded-xl flex items-center gap-2 transform -rotate-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <FaTruck className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">Delivery gratis</p>
                    <p className="text-blue-300 text-xs">pedidos +10kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="#f9fafb" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </header>

      {/* ===== TRUSTED BY ===== */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
            {["LavaClean", "LavaDrop", "LavaFresh", "LavaMatic"].map((name, i) => (
              <span key={i} className="text-gray-400 font-bold text-lg tracking-wider">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Nuestras Ventajas
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Por que elegirnos
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Miles de clientes confian en nosotros para el cuidado de su ropa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaUsers className="text-3xl" />, title: "Atencion 24/7", desc: "Asistencia personalizada por WhatsApp y chat para resolver cualquier duda al instante.", color: "from-blue-500 to-blue-600", bg: "bg-blue-50" },
              { icon: <FaMotorcycle className="text-3xl" />, title: "Delivery Express", desc: "Recogemos en menos de 2 horas. Entrega el mismo dia o al siguiente.", color: "from-emerald-500 to-emerald-600", bg: "bg-emerald-50" },
              { icon: <FaMapMarkedAlt className="text-3xl" />, title: "Rastreo en Vivo", desc: "Sigue tu pedido paso a paso desde tu celular. Siempre sabes donde esta tu ropa.", color: "from-purple-500 to-purple-600", bg: "bg-purple-50" },
            ].map((card, i) => (
              <div key={i} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 ${card.bg} rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.color} text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
              Simple y Rapido
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Como Funciona
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              En solo 3 pasos tendras tu ropa limpia y lista para usar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Agenda tu pedido", desc: "Elige tus prendas, indica la cantidad y selecciona tu metodo de pago preferido.", icon: "📱", gradient: "from-blue-50 to-blue-100", border: "border-blue-200", num: "text-blue-600" },
              { step: "02", title: "Recogemos tu ropa", desc: "Nuestro motorizado llega a tu puerta para recoger tu ropa de forma segura.", icon: "🏍️", gradient: "from-amber-50 to-amber-100", border: "border-amber-200", num: "text-amber-600" },
              { step: "03", title: "Entrega impecable", desc: "Recibe tu ropa limpia, planchada y con aroma fresco en tu domicilio.", icon: "✨", gradient: "from-emerald-50 to-emerald-100", border: "border-emerald-200", num: "text-emerald-600" },
            ].map((item, i) => (
              <div key={i} className={`relative bg-gradient-to-br ${item.gradient} rounded-3xl p-8 border ${item.border} hover:shadow-xl transition-all duration-300 group`}>
                <span className={`absolute top-6 right-6 text-6xl font-extrabold ${item.num} opacity-20 group-hover:opacity-40 transition-opacity`}>
                  {item.step}
                </span>
                <span className="text-5xl block mb-6">{item.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "+500", label: "Clientes Felices", icon: "😊" },
              { value: "24h", label: "Entrega Rapida", icon: "⚡" },
              { value: "4.9", label: "Calificacion", icon: "⭐" },
              { value: "+2000", label: "Pedidos Entregados", icon: "📦" },
            ].map((stat, i) => (
              <div key={i} className="text-white">
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <p className="text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</p>
                <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INFO CARDS ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-4 bg-blue-100 rounded-2xl">
                  <FaTruck className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Tiempos de Entrega</h3>
                  <p className="text-gray-400 text-sm">Rapido y seguro</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                  <FaCheckCircle className="text-blue-500" />
                  <span className="text-gray-700 text-sm">Recojo el mismo dia o al siguiente</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                  <FaCheckCircle className="text-blue-500" />
                  <span className="text-gray-700 text-sm">Entrega en 24 a 48 horas</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                  <FaCheckCircle className="text-blue-500" />
                  <span className="text-gray-700 text-sm">Notificacion en cada paso</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-5">
                <div className="p-4 bg-emerald-100 rounded-2xl">
                  <FaClock className="text-2xl text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Horarios de Atencion</h3>
                  <p className="text-gray-400 text-sm">Siempre disponibles</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { dia: "Lunes a Viernes", hora: "08:00 - 20:00", highlight: true },
                  { dia: "Sabados", hora: "08:00 - 20:00", highlight: true },
                  { dia: "Domingos", hora: "09:00 - 14:00", highlight: false },
                ].map((h, i) => (
                  <div key={i} className={`flex justify-between items-center p-3 rounded-xl ${h.highlight ? "bg-emerald-50" : "bg-gray-50"}`}>
                    <span className="text-gray-700 font-medium text-sm">{h.dia}</span>
                    <span className={`font-bold text-sm ${h.highlight ? "text-emerald-600" : "text-gray-500"}`}>{h.hora}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-2xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="text-6xl block mb-6">🧺</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Listo para empezar?</h2>
          <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
            Unete a mas de 500 clientes satisfechos. Agenda tu primer servicio y obtén un descuento especial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/solicitar" className="group px-10 py-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 rounded-2xl text-lg font-bold hover:from-yellow-300 hover:to-amber-300 transition-all shadow-xl shadow-yellow-500/25 transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Solicitar Servicio
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://wa.me/51923515757" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              <FaWhatsapp className="text-green-400" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/solicitar" element={<Solicitar />} />
            <Route path="/seguimiento" element={<Seguimiento />} />
            <Route path="/confirmacion" element={<Confirmacion />} />
            <Route path="/lavanderias" element={<Lavanderias />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="mb-4">
                  <img src="/Lavaya.jpg" alt="LavaYa" className="h-14 w-auto rounded-xl object-contain" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tu servicio de lavanderia express de confianza. Rapido, seguro y al mejor precio.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Enlaces</h4>
                <div className="space-y-2">
                  <Link to="/servicios" className="block text-gray-400 hover:text-white text-sm transition-colors">Servicios</Link>
                  <Link to="/solicitar" className="block text-gray-400 hover:text-white text-sm transition-colors">Solicitar</Link>
                  <Link to="/seguimiento" className="block text-gray-400 hover:text-white text-sm transition-colors">Seguimiento</Link>
                  <Link to="/lavanderias" className="block text-gray-400 hover:text-white text-sm transition-colors">Lavanderias</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <p className="text-gray-400 text-sm">+51 923 515 757</p>
                <p className="text-gray-400 text-sm mt-1">Lima, Peru</p>
                <a href="https://wa.me/51923515757" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-green-600 rounded-lg text-sm hover:bg-green-700 transition-colors">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
              &copy; 2025 LavaYa. Todos los derechos reservados.
            </div>
          </div>
        </footer>

        {/* Floating buttons */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-24 right-5 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl shadow-xl hover:bg-blue-700 hover:scale-110 transition-all z-50"
        >
          <FaRobot />
        </button>

        <a
          href="https://wa.me/51923515757"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-5 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl shadow-xl hover:bg-green-600 hover:scale-110 transition-all z-50"
        >
          <FaWhatsapp />
        </a>

        {/* Chatbot */}
        {isChatOpen && (
          <div className="fixed bottom-40 right-5 z-50 animate-slideUp">
            <Chatbot onClose={() => setIsChatOpen(false)} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
