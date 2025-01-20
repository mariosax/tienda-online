import { useState } from 'react';

const useProducts = () => {
  const [productList] = useState([
    { id: 1, name: 'Producto 1', price: 100, description: 'Descripción del Producto 1', category: 'Categoría 1' },
    { id: 2, name: 'Producto 2', price: 200, description: 'Descripción del Producto 2', category: 'Categoría 2' },
    { id: 3, name: 'Producto 3', price: 300, description: 'Descripción del Producto 3', category: 'Categoría 1' },
    // Más productos...
  ]);

  const updateStock = (productId, newQuantity) => {
    // Lógica para actualizar el stock (no implementado aquí, solo simulado)
    console.log(`Producto ${productId} actualizado a cantidad ${newQuantity}`);
  };

  return { productList, updateStock };
};

export default useProducts;
