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
      if (
        msgLower.includes("hola") ||
        msgLower.includes("buenos días") ||
        msgLower.includes("buenas tardes") ||
        msgLower.includes("buenas noches")
      ) {
        botReply =
          "¡Hola! 😊 ¿Cómo estás hoy? ¿Quieres conocer nuestros servicios, precios o promociones?";
      }
      // Estado de ánimo positivo
      else if (
        msgLower.includes("bien") ||
        msgLower.includes("muy bien") ||
        msgLower.includes("excelente") ||
        msgLower.includes("feliz")
      ) {
        botReply =
          "¡Me alegra escucharlo! 😄 ¿Quieres ver nuestros servicios, precios o promociones especiales?";
      }
      // Estado de ánimo negativo
      else if (
        msgLower.includes("mal") ||
        msgLower.includes("triste") ||
        msgLower.includes("cansado") ||
        msgLower.includes("estresado")
      ) {
        botReply =
          "Oh 😢 espero que mejore tu día. 🌈 Puedo contarte sobre nuestras ofertas y servicios para animarte.";
      }
      // Precios
      else if (
        msgLower.includes("precio") ||
        msgLower.includes("cuánto cuesta") ||
        msgLower.includes("costo") ||
        msgLower.includes("tarifa")
      ) {
        botReply =
          "Nuestros precios por kilo son: Camisa S/15, Pantalón S/18, Vestido S/20. 🚗 Además, el servicio motorizado para recoger y entregar tu ropa tiene un costo desde S/5 según la distancia.";
      }
      // Servicios
      else if (
        msgLower.includes("servicio") ||
        msgLower.includes("qué ofrecen") ||
        msgLower.includes("opciones") ||
        msgLower.includes("tipos")
      ) {
        botReply =
          "Ofrecemos lavado express, lavado premium, limpieza interior, plancha, y delivery 🚗💦. Todo pensado para tu comodidad.";
      }
      // Contacto
      else if (
        msgLower.includes("contacto") ||
        msgLower.includes("número") ||
        msgLower.includes("whatsapp") ||
        msgLower.includes("telefono")
      ) {
        botReply =
          "📞 Puedes llamarnos o escribirnos al +51 923 515 757. También estamos disponibles por WhatsApp para consultas rápidas.";
      }
      // Promociones
      else if (
        msgLower.includes("promo") ||
        msgLower.includes("descuento") ||
        msgLower.includes("oferta")
      ) {
        botReply =
          "🎉 Tenemos descuentos por volumen y promociones especiales cada semana. Por ejemplo, 5kg a 9kg: 10% de descuento, 10kg a 19kg: 15%, 20kg o más: 20%.";
      }
      // Por defecto
      else {
        botReply =
          "No estoy seguro de haber entendido 🤔. Puedo ayudarte con precios, servicios, promociones o nuestro número de contacto.";
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
