import React from 'react';
import { useUnicorns } from './context/UnicornContext';
import { useNavigate } from 'react-router-dom';

const UnicornsView = () => {
  const { unicorns, deleteUnicorn } = useUnicorns();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/unicornios/editar/${id}`);
  };

  return (
    <div>
      <h2>Lista de Unicornios</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Poderes</th>
            <th>Color</th>
            <th>Edad</th>  {/* Nueva columna para la edad */}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {unicorns.map(unicorn => (
            <tr key={unicorn._id}>
              <td>{unicorn.name}</td>
              <td>{unicorn.power}</td>
              <td>{unicorn.color}</td>
              <td>{unicorn.age}</td>  {/* Mostrar la edad del unicornio */}
              <td>
                <button onClick={() => deleteUnicorn(unicorn._id)}>Eliminar</button>
                <button onClick={() => handleEdit(unicorn._id)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnicornsView;
