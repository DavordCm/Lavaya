import React from "react";
import Sidebar from "./Sidebar";
import ServiceCard from "./ServiceCard";
import { FaTshirt, FaWater, FaIron, FaCut } from "react-icons/fa";

function Dashboard() {
  const services = [
    { icon: <FaTshirt />, title: "Wash & Fold", desc: "Regular clothes" },
    { icon: <FaWater />, title: "Dry Cleaning", desc: "Special garments" },
    { icon: <FaIron />, title: "Ironing", desc: "Dress pressing" },
    { icon: <FaCut />, title: "Alterations", desc: "Repair clothes" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-xl font-semibold mb-6">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow hover:bg-blue-700">
            Schedule Pickup
          </button>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
