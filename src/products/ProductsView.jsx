import React, { useState, useEffect } from "react";
import { productsData } from "./productsData";
import ProductForm from "./ProductForm";

const ProductsView = () => {
  const [products, setProducts] = useState(() => {
    // Si hay productos en localStorage, los usamos
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : productsData;
  });

  // Actualizar localStorage cuando products cambie
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  return (
    <div>
      <h1>Productos</h1>
      <ProductForm addProduct={addProduct} />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsView;
