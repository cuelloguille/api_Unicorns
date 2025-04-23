import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UnicornProvider } from './components/context/UnicornContext';
import UnicornRoutes from './components/UnicornRoutes';
import Navbar from './components/Navbar'; // <-- Importamos el navbar

const App = () => (
  <UnicornProvider>
    <Router>
      <Navbar />            {/* Mostramos el navbar arriba */}
      <UnicornRoutes />     {/* Rutas del módulo de unicornios */}
    </Router>
  </UnicornProvider>
);

export default App;  
