import React, { useState, useEffect } from 'react';
import { initialProducts } from './productsData';
import ProductForm from './ProductForm';

const ProductsView = () => {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem('productos');
    return stored ? JSON.parse(stored) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ProductForm addProduct={addProduct} />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Poder</th>
            <th>Edad</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.powers}</td>
              <td>{p.age}</td>
              <td>{p.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsView;
