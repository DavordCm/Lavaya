import React, { useState } from "react";
import "../styles/chatbot.css";

function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 ¡Hola! Bienvenido a LavaYa 🚿" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");

    setTimeout(() => {
      let msgLower = userMessage.toLowerCase();
      let botReply = "";

      // Saludos
      if (msgLower.includes("hola") || msgLower.includes("buenos días") || msgLower.includes("buenas tardes")) {
        botReply = "¡Hola! 😊 ¿Cómo estás hoy?";
      }
      // Estado de ánimo
      else if (msgLower.includes("bien") || msgLower.includes("muy bien")) {
        botReply = "¡Me alegra escucharlo! 😄 ¿Quieres conocer nuestros servicios o precios?";
      }
      else if (msgLower.includes("mal") || msgLower.includes("triste")) {
        botReply = "Oh 😢 espero que mejore tu día. ¿Quieres que te hable de nuestras promociones para animarte?";
      }
      // Precios
      else if (msgLower.includes("precio") || msgLower.includes("cuánto cuesta")) {
        botReply = "Nuestros precios dependen del servicio, pero van desde S/10 💰. Por ejemplo, lavado básico S/10 y lavado premium S/20.";
      }
      // Servicios
      else if (msgLower.includes("servicio") || msgLower.includes("qué ofrecen")) {
        botReply = "Ofrecemos lavado express, lavado premium, limpieza interior, y delivery 🚗💦";
      }
      // Contacto
      else if (msgLower.includes("contacto") || msgLower.includes("número") || msgLower.includes("whatsapp")) {
        botReply = "📞 Puedes llamarnos o escribirnos al +51 923 515 757";
      }
      // Por defecto
      else {
        botReply = "No estoy seguro de haber entendido 🤔, pero puedo ayudarte con precios, servicios o nuestro número de contacto.";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 600);
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-window">
        <div className="chat-header">
          LavaYa Chatbot
          <span className="close-btn" onClick={onClose}>✖</span>
        </div>
        <div className="chat-body">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-message ${msg.sender}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
