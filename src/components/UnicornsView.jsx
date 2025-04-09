import React from "react";

export default function UnicornsView({ unicorn }) {
  if (!unicorn) return null;

  const { name, color, age, power } = unicorn;

  return (
    <div className="mt-6 p-4 border rounded bg-white shadow-md">
      <h2 className="text-xl font-bold text-purple-600 mb-2">🦄 Tu Unicornio</h2>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Color:</strong> {color}</p>
      <p><strong>Edad:</strong> {age}</p>
      <p><strong>Poder:</strong> {power}</p>
    </div>
  );
}
