import React from "react";

// Componente para editar o eliminar un unicornio existente
export default function FormEdit({
  editName,
  setEditName,
  editColor,
  setEditColor,
  editAge,
  setEditAge,
  editPower,
  setEditPower,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold mb-2 text-center">🛠 Editar Unicornio</h3>

      <input
        type="text"
        placeholder="Nuevo nombre"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Nuevo color"
        value={editColor}
        onChange={(e) => setEditColor(e.target.value)}
      />

      <input
        type="number"
        placeholder="Nueva edad"
        value={editAge}
        onChange={(e) => setEditAge(e.target.value)}
      />

      <input
        type="text"
        placeholder="Nuevo poder especial"
        value={editPower}
        onChange={(e) => setEditPower(e.target.value)}
      />

      <button onClick={handleEdit} className="mt-2">Guardar Cambios</button>
      <button onClick={handleDelete} className="mt-2">Eliminar Unicornio</button>
    </div>
  );
}
