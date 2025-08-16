import React from "react";

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-8">LavaYa</h1>
      <ul className="space-y-4 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-blue-600">📦 New Order</li>
        <li className="cursor-pointer hover:text-blue-600">🧾 My Order</li>
        <li className="cursor-pointer hover:text-blue-600">🧺 Services</li>
        <li className="cursor-pointer hover:text-blue-600">👤 Account</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
