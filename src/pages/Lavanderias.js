// Lavanderias.js
import React from "react";
import "../styles/Lavanderias.css";

const lavanderias = [
  {
    nombre: "LavaYa Express",
    direccion: "Av. La Libertad 100, Chiclayo",
    precio: "S/ 12 por kilo",
    pagos: ["BCP", "Yape", "Plin"],
    img: "/express.png",
  },
  {
    nombre: "LavaYa Premium",
    direccion: "Calle Los Olivos 456, Chiclayo",
    precio: "S/ 15 por kilo",
    pagos: ["BCP", "Yape", "Interbank"],
    img: "/premiun.png",
  },
  {
    nombre: "LavaYa Eco",
    direccion: "Jr. Las Palmas 789, Chiclayo",
    precio: "S/ 10 por kilo",
    pagos: ["Yape", "Plin"],
    img: "/eco.png",
  },
  {
    nombre: "LavaYa Rápido",
    direccion: "Av. Comercio 101, Chiclayo",
    precio: "S/ 11 por kilo",
    pagos: ["BCP", "Interbank", "Plin"],
    img: "/fast.png",
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
