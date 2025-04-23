import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsView from './ProductsView';
import ProductForm from './ProductForm';

const ProductRoutes = () => (
  <Routes>
    <Route path="/productos" element={<ProductsView />} />
    <Route path="/productos/crear" element={<ProductForm />} />
  </Routes>
);

export default ProductRoutes;
