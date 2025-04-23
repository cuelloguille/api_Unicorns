import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    background: '#e0e0e0',
    marginBottom: '1rem',
    borderBottom: '2px solid #ccc'
  }}>
    <Link to="/unicornios">Ver Unicornios</Link>
    <Link to="/unicornios/crear">Crear Unicornio</Link>
    
  </nav>
);

export default Navbar;
