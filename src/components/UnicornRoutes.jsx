import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UnicornsView from './UnicornsView';
import FormCreate from './FormCreate';
import FormEdit from './FormEdit';
import ProductsView from '../products/ProductsView';    

const UnicornRoutes = () => (
  <Routes>
    <Route path="/unicornios" element={<UnicornsView />} />
    <Route path="/unicornios/crear" element={<FormCreate />} />
    <Route path="/unicornios/editar/:id" element={<FormEdit />} />
    
    </Routes>
);

export default UnicornRoutes;
