import React, { useState, useEffect } from 'react';
import { useUnicorns } from './context/UnicornContext';
import { useNavigate, useParams } from 'react-router-dom';

const FormEdit = () => {
  const { editUnicorn, unicorns } = useUnicorns();
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [power, setPower] = useState('');  // Agregar estado para el poder
  const [age, setAge] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    const unicornToEdit = unicorns.find((unicorn) => unicorn._id === id);
    if (unicornToEdit) {
      setName(unicornToEdit.name);
      setPower(unicornToEdit.power);  // Asignar el poder al estado
      setAge(unicornToEdit.age);
      setColor(unicornToEdit.color);
    }
  }, [unicorns, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUnicorn = { name, power, age, color };  // Incluir poder en los datos
    editUnicorn(id, updatedUnicorn);
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
      <button type="submit">Editar Unicornio</button>
    </form>
  );
};

export default FormEdit;
