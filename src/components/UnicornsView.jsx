// Importa React para poder usar JSX
import React from "react";

// Componente funcional que recibe un unicornio como prop
export default function UnicornsView({ unicorn }) {
  // Si no se proporciona un unicornio, no renderiza nada
  if (!unicorn) return null;

  // Extrae las propiedades relevantes del objeto unicornio
  const { name, color, age, power } = unicorn;

  return (
    // Contenedor con estilos: margen superior, padding, borde, esquinas redondeadas y sombra
    <div className="mt-6 p-4 border rounded bg-white shadow-md">
      {/* Título del bloque con un emoji y estilos personalizados */}
      <h2 className="text-xl font-bold text-purple-600 mb-2">🦄 Tu Unicornio</h2>

      {/* Muestra cada propiedad del unicornio en una línea */}
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Color:</strong> {color}</p>
      <p><strong>Edad:</strong> {age}</p>
      <p><strong>Poder:</strong> {power}</p>
    </div>
  );
}
