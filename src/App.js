import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { FaMapMarkedAlt, FaMotorcycle, FaUsers, FaWhatsapp } from "react-icons/fa";
import { FaRobot } from "react-icons/fa"; // 🔹 Icono del bot
import Chatbot from "./components/chatbot";
import Servicios from "./pages/Servicios";
import Solicitar from "./pages/Solicitar";
import Seguimiento from "./pages/Seguimiento";
import Confirmacion from "./pages/Confirmacion";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-logo">
            <img src="/Lavaya.jpg" alt="Logo" className="logo" />
          </div>
          <ul className="navbar-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/seguimiento">Seguimiento</Link></li>
          </ul>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="hero">
                  <h1>Bienvenido a LavaYa</h1>
                  <p>
                    Tu servicio express de confianza, Ofrecemos los mejores servicios para ti,<br />
                    rápida y segura
                  </p>
                </header>

                <section className="cards">
                  <div className="card">
                    <FaUsers className="card-icon" />
                    <h3>Atención al Cliente</h3>
                    <p>Asistencia personalizada para resolver tus necesidades.</p>
                  </div>
                  <div className="card">
                    <FaMotorcycle className="card-icon" />
                    <h3>Delivery</h3>
                    <p>Servicio de entrega rápida y segura hasta tu puerta.</p>
                  </div>
                  <div className="card">
                    <FaMapMarkedAlt className="card-icon" />
                    <h3>Seguimiento</h3>
                    <p>Sigue el estado de tu pedido en tiempo real, fácil y rápido.</p>
                  </div>
                </section>

                <div className="solicitar-container">
                  <Link to="/solicitar">
                    <button className="solicitar-btn">Solicitar Ahora</button>
                  </Link>
                </div>
              </>
            }
          />

          <Route path="/servicios" element={<Servicios />} />
          <Route path="/solicitar" element={<Solicitar />} />
          <Route path="/seguimiento" element={<Seguimiento />} />
          <Route path="/confirmacion" element={<Confirmacion />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 Nuestra Empresa</p>
          <a
            href="https://wa.me/51923515757"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-icon"
          >
            <FaWhatsapp />
          </a>
        </footer>

        {/* Botón flotante del bot */}
        <div
          className="chatbot-icon"
          onClick={toggleChat}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            backgroundColor: "#007bff",
            borderRadius: "50%",
            padding: "15px",
            cursor: "pointer",
            color: "white",
            fontSize: "28px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
          }}
        >
          <FaRobot />
        </div>

        {/* Chatbot solo si está abierto */}
        {isChatOpen && (
  <div style={{ position: "fixed", bottom: "140px", right: "20px", zIndex: 1000 }}>
    <Chatbot onClose={toggleChat} />
  </div>
)}

      </div>
    </Router>
  );
}

export default App;
