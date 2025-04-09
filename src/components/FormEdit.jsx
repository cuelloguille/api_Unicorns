import React from "react";

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
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Editar Unicornio</h2>
      <div className="space-y-4">
        <div>
          <label className="block font-medium">Nuevo nombre</label>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Nuevo color</label>
          <input
            type="text"
            value={editColor}
            onChange={(e) => setEditColor(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Nueva edad</label>
          <input
            type="number"
            value={editAge}
            onChange={(e) => setEditAge(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium">Nuevo poder</label>
          <input
            type="text"
            value={editPower}
            onChange={(e) => setEditPower(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={handleEdit}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Guardar cambios
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Eliminar unicornio
          </button>
        </div>
      </div>
    </div>
  );
}
