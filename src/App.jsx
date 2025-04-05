import React, { useState, useEffect } from "react";

export default function ApiCrud() {
  const [name, setName] = useState("");
  const [features, setFeatures] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [response, setResponse] = useState(null);
  const [objectId, setObjectId] = useState(localStorage.getItem("objectId"));
  const [editFeature, setEditFeature] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      data: {
        features,
        price: Number(price),
        year: Number(year),
      },
    };

    const res = await fetch("https://api.restful-api.dev/objects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("POST Response:", result);
    setResponse(result);
    localStorage.setItem("objectId", result.id);
    setObjectId(result.id);
  };

  const handleEdit = async () => {
    if (!objectId) return alert("No object ID found in localStorage");
    const data = {
      data: {
        features: editFeature,
        price: Number(editPrice),
      },
    };

    const res = await fetch(`https://api.restful-api.dev/objects/${objectId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("PUT Response:", result);
    setResponse(result);
  };

  const handleDelete = async () => {
    if (!objectId) return alert("No object ID found in localStorage");
    const res = await fetch(`https://api.restful-api.dev/objects/${objectId}`, {
      method: "DELETE",
    });

    if (res.ok) {
      console.log("Object deleted successfully");
      alert("Object deleted successfully");
      localStorage.removeItem("objectId");
      setObjectId(null);
      setResponse(null);
    } else {
      console.error("Failed to delete object");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Crear Objeto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 border rounded" />
        <input type="text" placeholder="Características" value={features} onChange={(e) => setFeatures(e.target.value)} required className="w-full p-2 border rounded" />
        <input type="number" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} required className="w-full p-2 border rounded" />
        <input type="number" placeholder="Año" value={year} onChange={(e) => setYear(e.target.value)} required className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Crear</button>
      </form>

      {objectId && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Editar Objeto</h2>
          <input type="text" placeholder="Nuevas características" value={editFeature} onChange={(e) => setEditFeature(e.target.value)} className="w-full p-2 border rounded mb-2" />
          <input type="number" placeholder="Nuevo precio" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} className="w-full p-2 border rounded mb-2" />
          <button onClick={handleEdit} className="bg-yellow-500 text-white px-4 py-2 rounded">Actualizar</button>
        </div>
      )}

      {objectId && (
        <div className="mt-6">
          <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">Eliminar Objeto</button>
        </div>
      )}

      {response && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h3 className="font-bold mb-2">Respuesta de la API:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
