import React from "react";

export default function FormCreate({
  name,
  setName,
  color,
  setColor,
  age,
  setAge,
  power,
  setPower,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-purple-100 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-purple-700 text-center">🦄 Crear Nuevo Unicornio</h2>

      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 border border-purple-300 rounded"
      />

      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        required
        className="w-full p-2 border border-purple-300 rounded"
      />

      <input
        type="number"
        placeholder="Edad"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
        className="w-full p-2 border border-purple-300 rounded"
      />

      <input
        type="text"
        placeholder="Poder mágico"
        value={power}
        onChange={(e) => setPower(e.target.value)}
        required
        className="w-full p-2 border border-purple-300 rounded"
      />

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-2 rounded hover:opacity-90 transition"
      >
        ✨ Crear Unicornio
      </button>
    </form>
  );
}
