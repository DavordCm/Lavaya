import React, { useState, useRef, useEffect } from "react";
import "../styles/chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! Soy tu asistente. ¿En qué puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // 👉 lógica del bot
  const getBotResponse = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes("hola")) return "¡Hola! ¿Cómo estás? 🙌";
    if (msg.includes("bien")) return "¡Me alegra escuchar eso! 😊 ¿Deseas conocer nuestros servicios?";
    if (msg.includes("precio")) return "Nuestros precios varían según el servicio 🚗💦";
    if (msg.includes("servicio")) return "Ofrecemos delivery, lavado y más 🚀";
    if (msg.includes("adios")) return "¡Hasta luego! Gracias por contactarnos 👋";
    if (msg.includes("quiero el numero") || msg.includes("contacto")) {
      return "📞 Puedes comunicarte con nosotros al +51 923 515 757"; // ✏️ Modifica este número según tu empresa
    }

    // Aquí puedes agregar más casos
    // if(msg.includes("otra palabra clave")) return "Tu respuesta personalizada";

    return "Lo siento, no entendí tu mensaje 🤔"; // Respuesta por defecto
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage = { from: "bot", text: getBotResponse(input) };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput("");
  };

  // 👉 autoscroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">🤖 Bot Lavaya</div>

      <div className="chatbot-body">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={msg.from === "user" ? "user-message" : "bot-message"}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Escribe un mensaje..."
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
};

export default Chatbot;
