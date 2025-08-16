import React, { useState } from "react";
import "./App.css";
import { FaMapMarkedAlt, FaMotorcycle, FaUsers, FaWhatsapp, FaRobot, FaTimes } from "react-icons/fa";
import Chatbot from "./components/chatbot";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="/Lavaya.jpg"
            alt="Logo"
            className="logo"
          />
        </div>
        <ul className="navbar-links">
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Solicitar</li>
        </ul>
      </nav>

      {/* Hero */}
      <header className="hero">
        <h1>Bienvenido a LavaYa</h1>
        <p>
          Tu servicio express de confianza, Ofrecemos los mejores servicios para ti,<br />
          rápida y segura
        </p>
      </header>

      {/* Cards */}
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

      {/* Botón solicitar */}
      <div className="solicitar-container">
        <button className="solicitar-btn">Solicitar Ahora</button>
      </div>

      {/* Contactos */}
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

      {/* Bot flotante */}
      <div className="chatbot-button" onClick={toggleChat}>
        {isChatOpen ? <FaTimes /> : <FaRobot />}
      </div>

      {/* Ventana de Chatbot */}
      {isChatOpen && (
        <div className="chatbot-window">
          <Chatbot /> {/* 👈 aquí llamamos al bot */}
        </div>
      )}
    </div>
  );
}

export default App;
