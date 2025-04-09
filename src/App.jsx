// Importaciones necesarias de React y los componentes hijos
import React, { useState } from "react";
import FormCreate from "./components/FormCreate";
import FormEdit from "./components/FormEdit";
import UnicornsView from "./components/UnicornsView";

// URL base de la API proporcionada por crudcrud.com
const API_BASE = "https://crudcrud.com/api/d654a5b6d1b6441eb10d5aecba8199ce/unicorns";

export default function UnicornsContainer() {
  // Estados para el formulario de creación
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [age, setAge] = useState("");
  const [power, setPower] = useState("");

  // Estado para almacenar la respuesta del unicornio creado o editado
  const [response, setResponse] = useState(null);

  // ID del unicornio guardado en localStorage (permite persistencia entre recargas)
  const [objectId, setObjectId] = useState(localStorage.getItem("unicornId"));

  // Estados para el formulario de edición
  const [editName, setEditName] = useState("");
  const [editColor, setEditColor] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editPower, setEditPower] = useState("");

  // Función para manejar la creación del unicornio
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene recarga de página
    const data = {
      name,
      color,
      age: Number(age),
      power,
    };

    // Llamada POST a la API para crear un unicornio
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("POST Response:", result);

    // Guarda la respuesta y el ID del unicornio creado
    setResponse(result);
    localStorage.setItem("unicornId", result._id);
    setObjectId(result._id);
  };

  // Función para manejar la edición del unicornio existente
  const handleEdit = async () => {
    if (!objectId) return alert("No unicorn ID found in localStorage");

    const data = {
      name: editName || name,
      color: editColor || color,
      age: Number(editAge || age),
      power: editPower || power,
    };

    // Llamada PUT para actualizar los datos del unicornio
    const res = await fetch(`${API_BASE}/${objectId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log("PUT Response:", await res.text());

    // Actualiza la respuesta para reflejar los cambios
    setResponse({
      name: data.name,
      color: data.color,
      age: data.age,
      power: data.power,
      _id: objectId,
    });
  };

  // Función para eliminar el unicornio
  const handleDelete = async () => {
    if (!objectId) return alert("No unicorn ID found in localStorage");

    const res = await fetch(`${API_BASE}/${objectId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      console.log("Unicornio eliminado correctamente");
      alert("Unicornio eliminado correctamente");

      // Limpia localStorage y los estados
      localStorage.removeItem("unicornId");
      setObjectId(null);
      setResponse(null);
      setName("");
      setColor("");
      setAge("");
      setPower("");
    } else {
      console.error("Error al eliminar unicornio");
    }
  };

  // Renderizado del componente
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">✨ Crear Unicornio ✨</h1>

      {/* Formulario para crear un unicornio */}
      <FormCreate
        name={name}
        setName={setName}
        color={color}
        setColor={setColor}
        age={age}
        setAge={setAge}
        power={power}
        setPower={setPower}
        handleSubmit={handleSubmit}
      />

      {/* Formulario de edición y eliminación, solo si hay un unicornio creado */}
      {objectId && (
        <FormEdit
          editName={editName}
          setEditName={setEditName}
          editColor={editColor}
          setEditColor={setEditColor}
          editAge={editAge}
          setEditAge={setEditAge}
          editPower={editPower}
          setEditPower={setEditPower}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}

      {/* Vista del unicornio actual */}
      {response && <UnicornsView unicorn={response} />}
    </div>
  );
}
