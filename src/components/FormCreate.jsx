import React, { useState } from 'react';
import { useUnicorns } from './context/UnicornContext';
import { useNavigate } from 'react-router-dom';

const FormCreate = () => {
  const { createUnicorn } = useUnicorns();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [power, setPower] = useState('');
  const [age, setAge] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUnicorn = { name, age, color, power };  // Asegúrate de incluir power en el objeto
    createUnicorn(newUnicorn);
    navigate('/unicornios'); // Redirige a la lista de unicornios
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />

      <input 
        type="text" 
        placeholder="Poder" 
        value={power} 
        onChange={(e) => setPower(e.target.value)}  
      />
      
      <input 
        type="number" 
        placeholder="Edad" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      
      <input 
        type="text" 
        placeholder="Color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
      />
      
      <button type="submit">Crear Unicornio</button>
    </form>
  );
};

export default FormCreate;
