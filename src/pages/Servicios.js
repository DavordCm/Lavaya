import React, { useState } from "react";
import "../styles/Servicio.css";

function Servicios() {
  const [activeTab, setActiveTab] = useState("precios");

  const renderContent = () => {
    switch (activeTab) {
      case "precios":
        return (
          <div className="cards-row">
            <div className="card">
              <h2>Precios de Lavandería por Kilo</h2>
              <table>
                <thead>
                  <tr>
                    <th>Prenda</th>
                    <th>Precio por kilo (S/)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Camisa</td><td>15.00</td></tr>
                  <tr><td>Pantalón</td><td>18.00</td></tr>
                  <tr><td>Vestido</td><td>20.00</td></tr>
                </tbody>
              </table>
            </div>

            <div className="card">
              <h2>Ejemplo de Precios por Cantidad de Kilos</h2>
              <table>
                <thead>
                  <tr>
                    <th>Kilos</th>
                    <th>Precio Estimado (S/)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1 kg</td><td>15.00</td></tr>
                  <tr><td>2 kg</td><td>30.00</td></tr>
                  <tr><td>7 kg</td><td>105.00</td></tr>
                </tbody>
              </table>
            </div>

            <div className="card">
              <h2>Servicio Motorizado</h2>
              <table>
                <thead>
                  <tr>
                    <th>Tipo de Servicio</th>
                    <th>Precio (S/)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Recojo y Entrega</td><td>8.00</td></tr>
                  <tr><td>Solo Recojo</td><td>5.00</td></tr>
                  <tr><td>Solo Entrega</td><td>5.00</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "descuento":
        return (
          <div className="card">
            <h2>Descuento por Volumen</h2>
            <table>
              <thead>
                <tr>
                  <th>Cantidad de kilos</th>
                  <th>Descuento</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>5 a 9</td><td>10%</td></tr>
                <tr><td>10 a 19</td><td>15%</td></tr>
                <tr><td>20 o más</td><td>20%</td></tr>
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
          className={activeTab === "descuento" ? "active" : ""}
          onClick={() => setActiveTab("descuento")}
        >Descuentos</button>
      </div>
      {renderContent()}
    </div>
  );
}

export default Servicios;
