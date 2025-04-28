import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UnicornProvider } from './components/context/UnicornContext';
import UnicornRoutes from './components/UnicornRoutes';
import Navbar from './components/Navbar';
import ProductsView from "./products/ProductsView";

const App = () => (
  <UnicornProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<UnicornRoutes />} />
        <Route path="/productos" element={<ProductsView />} />
      </Routes>
    </Router>
  </UnicornProvider>
);

export default App;
