import React, { useState } from "react";
import FormCreate from "./components/FormCreate";
import FormEdit from "./components/FormEdit";
import UnicornsView from "./components/UnicornsView";

const API_BASE = "https://crudcrud.com/api/d654a5b6d1b6441eb10d5aecba8199ce/unicorns";

export default function UnicornsContainer() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [age, setAge] = useState("");
  const [power, setPower] = useState("");

  const [response, setResponse] = useState(null);
  const [objectId, setObjectId] = useState(localStorage.getItem("unicornId"));

  const [editName, setEditName] = useState("");
  const [editColor, setEditColor] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editPower, setEditPower] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      color,
      age: Number(age),
      power,
    };

    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("POST Response:", result);
    setResponse(result);
    localStorage.setItem("unicornId", result._id);
    setObjectId(result._id);
  };

  const handleEdit = async () => {
    if (!objectId) return alert("No unicorn ID found in localStorage");

    const data = {
      name: editName || name,
      color: editColor || color,
      age: Number(editAge || age),
      power: editPower || power,
    };

    const res = await fetch(`${API_BASE}/${objectId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log("PUT Response:", await res.text());
    setResponse({
      name: editName || name,
      color: editColor || color,
      age: Number(editAge || age),
      power: editPower || power,
      _id: objectId,
    });
  };

  const handleDelete = async () => {
    if (!objectId) return alert("No unicorn ID found in localStorage");

    const res = await fetch(`${API_BASE}/${objectId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      console.log("Unicornio eliminado correctamente");
      alert("Unicornio eliminado correctamente");
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

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">✨ Crear Unicornio ✨</h1>

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

      {response && <UnicornsView unicorn={response} />}
    </div>
  );
}
