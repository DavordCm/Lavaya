// Lavanderias.js
import React from "react";
import "../styles/Lavanderias.css";

const lavanderias = [
  {
    nombre: "LavaClean",
    direccion: "Av. Javier Prado 245, San Borja, Lima",
    precio: "S/ 12 por kilo",
    pagos: ["BCP", "Yape", "Plin"],
    img: "/lavaclean.png",
  },
  {
    nombre: "LavaDrop",
    direccion: "Calle Berlín 102, Miraflores, Lima",
    precio: "S/ 15 por kilo",
    pagos: ["BCP", "Yape", "Interbank"],
    img: "/lavadrop.png",
  },
  {
    nombre: "LavaFresh",
    direccion: "Jr. Los Pinos 88, Surco, Lima",
    precio: "S/ 10 por kilo",
    pagos: ["Yape", "Plin"],
    img: "/lavafresh.png",
  },
  {
    nombre: "LavaMatic",
    direccion: "Av. Angamos 310, San Isidro, Lima",
    precio: "S/ 11 por kilo",
    pagos: ["BCP", "Interbank", "Plin"],
    img: "/lavamatic.png",
  },
];

function Lavanderias() {
  return (
    <div className="lavanderias-container">
      <h2>Nuestras Lavanderías Asociadas</h2>
      <div className="lavanderias-lista">
        {lavanderias.map((l, index) => (
          <div className="lavanderia-card" key={index}>
            <img src={l.img} alt={l.nombre} className="lavanderia-img" />
            <h3>{l.nombre}</h3>
            <p>Dirección: {l.direccion}</p>
            <p>Precio promedio: {l.precio}</p>
            <p>Métodos de pago: {l.pagos.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lavanderias;
