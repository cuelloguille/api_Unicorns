import React from "react";

// Componente para crear un nuevo unicornio
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
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <input
        type="number"
        placeholder="Edad"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="text"
        placeholder="Poder especial"
        value={power}
        onChange={(e) => setPower(e.target.value)}
      />

      <button type="submit">Crear Unicornio</button>
    </form>
  );
}
