import React, { useState } from "react";
import "../styles/Servicio.css";

function Servicios() {
  const [activeTab, setActiveTab] = useState("precios");

  const renderContent = () => {
    switch (activeTab) {
      case "precios":
        return (
          <div className="card">
            <h2>Precios de Lavandería</h2>
            <table>
              <thead>
                <tr>
                  <th>Prenda</th>
                  <th>Precio (S/)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Camisa</td><td>5.00</td></tr>
                <tr><td>Pantalón</td><td>6.00</td></tr>
                <tr><td>Vestido</td><td>8.00</td></tr>
              </tbody>
            </table>
          </div>
        );

      case "premium":
        return (
          <div className="card">
            <h2>Servicio Premium</h2>
            <ul>
              <li>Lavado con detergentes hipoalergénicos</li>
              <li>Planchado profesional</li>
              <li>Entrega en menos de 6 horas</li>
              <li>Empaque protector individual</li>
            </ul>
            <p><strong>Precio adicional:</strong> S/ 15</p>
          </div>
        );

      case "descuento":
        return (
          <div className="card">
            <h2>Descuento por Volumen</h2>
            <table>
              <thead>
                <tr>
                  <th>Cantidad de prendas</th>
                  <th>Descuento</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>10 a 19</td><td>10%</td></tr>
                <tr><td>20 a 29</td><td>15%</td></tr>
                <tr><td>30 o más</td><td>20%</td></tr>
              </tbody>
            </table>
          </div>
        );

      case "paquete":
        return (
          <div className="card">
            <h2>Precio por Paquete</h2>
            <table>
              <thead>
                <tr>
                  <th>Paquete</th>
                  <th>Incluye</th>
                  <th>Precio (S/)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Básico</td><td>10 prendas</td><td>35.00</td></tr>
                <tr><td>Familiar</td><td>20 prendas</td><td>65.00</td></tr>
                <tr><td>Negocios</td><td>50 prendas</td><td>150.00</td></tr>
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="servicios-container">
      <h1>Servicios</h1>
      <div className="tabs">
        <button 
          className={activeTab === "precios" ? "active" : ""}
          onClick={() => setActiveTab("precios")}
        >Precios</button>
        <button 
          className={activeTab === "premium" ? "active" : ""}
          onClick={() => setActiveTab("premium")}
        >Premium</button>
        <button 
          className={activeTab === "descuento" ? "active" : ""}
          onClick={() => setActiveTab("descuento")}
        >Descuentos</button>
        <button 
          className={activeTab === "paquete" ? "active" : ""}
          onClick={() => setActiveTab("paquete")}
        >Paquetes</button>
      </div>
      {renderContent()}
    </div>
  );
}

export default Servicios;
