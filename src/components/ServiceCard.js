import React from "react";

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg cursor-pointer transition">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}

export default ServiceCard;
