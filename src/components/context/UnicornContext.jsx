import React, { createContext, useContext, useState, useEffect } from 'react';

const UnicornContext = createContext();

export const useUnicorns = () => useContext(UnicornContext);

const API_URL = 'https://crudcrud.com/api/d3adb100bcd946c3b76b51a1be97480e/unicorns';

export const UnicornProvider = ({ children }) => {
  const [unicorns, setUnicorns] = useState([]);

  const getUnicorns = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setUnicorns(data);
    } catch (error) {
      console.error('Error al obtener unicornios:', error);
    }
  };

  const createUnicorn = async (newUnicorn) => {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUnicorn),
      });
      getUnicorns();
    } catch (error) {
      console.error('Error al crear unicornio:', error);
    }
  };

  const editUnicorn = async (id, updatedUnicorn) => {
    try {
      const { _id, ...cleanUnicorn } = updatedUnicorn;
      await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanUnicorn),
      });
      getUnicorns();
    } catch (error) {
      console.error('Error al editar unicornio:', error);
    }
  };

  const deleteUnicorn = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      getUnicorns();
    } catch (error) {
      console.error('Error al eliminar unicornio:', error);
    }
  };

  useEffect(() => {
    getUnicorns();
  }, []);

  return (
    <UnicornContext.Provider value={{ unicorns, createUnicorn, editUnicorn, deleteUnicorn }}>
      {children}
    </UnicornContext.Provider>
  );
};
