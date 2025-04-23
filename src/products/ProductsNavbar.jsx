import React from 'react';
import { Link } from 'react-router-dom';

const ProductsNavbar = () => (
  <nav style={{
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    background: '#c8e6c9',
    marginBottom: '1rem',
    borderBottom: '2px solid #81c784'
  }}>
    <Link to="/productos">Ver Productos</Link>
    <Link to="/productos/crear">Crear Producto</Link>
  </nav>
);

export default ProductsNavbar;
