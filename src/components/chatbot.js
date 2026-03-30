import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaTimes, FaRobot } from "react-icons/fa";

const QUICK_OPTIONS = [
  { label: "Precios", icon: "💰" },
  { label: "Servicios", icon: "🧺" },
  { label: "Horarios", icon: "🕐" },
  { label: "Descuentos", icon: "🎉" },
  { label: "Como funciona", icon: "❓" },
  { label: "Contacto", icon: "📞" },
];

const RESPONSES = {
  greeting: [
    "Hola! Bienvenido a LavaYa! En que puedo ayudarte hoy?",
    "Hola! Que gusto verte por aqui! Como te puedo ayudar?",
    "Bienvenido! Estoy aqui para ayudarte con lo que necesites!",
  ],
  positive: [
    "Me alegra mucho! Quieres ver nuestros servicios o precios?",
    "Que bueno saberlo! Te cuento sobre nuestras promociones?",
  ],
  negative: [
    "Espero que mejore tu dia! Puedo contarte sobre nuestras ofertas para animarte.",
    "Animo! Deja que LavaYa se encargue de tu ropa mientras descansas.",
  ],
  precio: [
    "Nuestros precios por kilo:\n\n👔 Camisa — S/ 15.00\n👖 Pantalon — S/ 18.00\n👗 Vestido — S/ 20.00\n\n🚗 Delivery desde S/ 5.00\n\nQuieres saber sobre descuentos por volumen?",
  ],
  servicio: [
    "Nuestros servicios incluyen:\n\n🧺 Lavado Express\n✨ Lavado Premium\n👔 Planchado\n🚚 Delivery a domicilio\n\nRecogemos tu ropa, la lavamos y te la entregamos limpia!",
  ],
  contacto: [
    "Puedes contactarnos por:\n\n📞 Telefono: +51 923 515 757\n💬 WhatsApp: +51 923 515 757\n\nEstamos para ayudarte!",
  ],
  descuento: [
    "Tenemos descuentos por volumen:\n\n📦 5 a 9 kg — 10% OFF\n📦 10 a 19 kg — 15% OFF\n📦 20+ kg — 20% OFF\n\nMientras mas envias, mas ahorras!",
  ],
  horario: [
    "Nuestros horarios de atencion:\n\n📅 Lunes a Sabado: 08:00 - 20:00\n📅 Domingos: 09:00 - 14:00\n\nSiempre listos para atenderte!",
  ],
  como_funciona: [
    "Es muy facil! Solo 3 pasos:\n\n1️⃣ Ingresa tus datos y direccion\n2️⃣ Selecciona tus prendas y cantidad\n3️⃣ Elige tu metodo de pago\n\nNosotros recogemos y entregamos en tu puerta!",
  ],
  solicitar: [
    "Para solicitar nuestro servicio, haz clic en 'Solicitar Ahora' en el menu o ve a la pagina principal. Es rapido y facil!",
  ],
  seguimiento: [
    "Para rastrear tu pedido, ve a la seccion 'Seguimiento' en el menu e ingresa tu codigo (ej: LAV-123456). Veras el estado en tiempo real!",
  ],
  pago: [
    "Aceptamos varios metodos de pago:\n\n💳 Tarjeta (BCP, Interbank)\n📱 Yape\n📱 Plin\n\nElige el que mas te convenga!",
  ],
  default: [
    "Hmm, no estoy seguro de entender. Prueba con las opciones rapidas de abajo o preguntame sobre precios, servicios u horarios!",
    "No capte bien tu pregunta. Usa los botones de abajo para elegir un tema, o escribeme sobre precios, servicios o contacto.",
  ],
};

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getReply(text) {
  const msg = text.toLowerCase();
  if (msg.match(/hola|buenos|buenas|hey|saludos/)) return getRandom(RESPONSES.greeting);
  if (msg.match(/\bbien\b|excelente|feliz|genial|perfecto/)) return getRandom(RESPONSES.positive);
  if (msg.match(/\bmal\b|triste|cansado|estresado/)) return getRandom(RESPONSES.negative);
  if (msg.match(/precio|cuanto|cuesta|costo|tarifa|cobran/)) return getRandom(RESPONSES.precio);
  if (msg.match(/servicio|ofrecen|opciones|tipo|lavado/)) return getRandom(RESPONSES.servicio);
  if (msg.match(/contacto|numero|whatsapp|telefono|llamar/)) return getRandom(RESPONSES.contacto);
  if (msg.match(/promo|descuento|oferta|ahorro/)) return getRandom(RESPONSES.descuento);
  if (msg.match(/horario|hora|atencion|abierto|cuando/)) return getRandom(RESPONSES.horario);
  if (msg.match(/como funciona|como pido|como solicito|como hago|pasos/)) return getRandom(RESPONSES.como_funciona);
  if (msg.match(/solicitar|pedir|agendar|reservar/)) return getRandom(RESPONSES.solicitar);
  if (msg.match(/seguimiento|rastrear|codigo|pedido|donde esta/)) return getRandom(RESPONSES.seguimiento);
  if (msg.match(/pago|pagar|yape|plin|tarjeta|bcp|interbank/)) return getRandom(RESPONSES.pago);
  return getRandom(RESPONSES.default);
}

function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hola! Bienvenido a LavaYa! En que puedo ayudarte?", showOptions: true },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    setMessages((prev) =>
      prev.map((m) => ({ ...m, showOptions: false })).concat({ sender: "user", text })
    );
    setInput("");
    setIsTyping(true);

    const delay = 400 + Math.random() * 800;
    setTimeout(() => {
      setIsTyping(false);
      const reply = getReply(text);
      setMessages((prev) => [...prev, { sender: "bot", text: reply, showOptions: true }]);
    }, delay);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
  };

  const handleQuickOption = (label) => {
    sendMessage(label);
  };

  return (
    <div className="w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col" style={{ maxHeight: "520px" }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
            <FaRobot className="text-white text-sm" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">LavaYa Bot</p>
            <p className="text-blue-200 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> En linea
            </p>
          </div>
        </div>
        <button onClick={onClose} className="text-white/70 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-lg">
          <FaTimes />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx}>
            <div className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              {msg.sender === "bot" && (
                <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center mr-2 shrink-0 mt-1">
                  <FaRobot className="text-blue-600 text-xs" />
                </div>
              )}
              <div className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-md"
                  : "bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-md"
              }`}>
                {msg.text}
              </div>
            </div>

            {/* Quick options after bot message */}
            {msg.sender === "bot" && msg.showOptions && (
              <div className="flex flex-wrap gap-1.5 mt-2.5 ml-9">
                {QUICK_OPTIONS.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleQuickOption(opt.label)}
                    className="px-3 py-1.5 bg-white border border-blue-200 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-50 hover:border-blue-400 transition-all active:scale-95"
                  >
                    {opt.icon} {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center mr-2 shrink-0">
              <FaRobot className="text-blue-600 text-xs" />
            </div>
            <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-100 bg-white shrink-0">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={isTyping}
            className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50 transition-all"
          />
          <button
            onClick={handleSend}
            disabled={isTyping || !input.trim()}
            className="px-4 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
          >
            <FaPaperPlane className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
