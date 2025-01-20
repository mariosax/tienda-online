import React, { useState } from 'react';
import useProducts from '../hooks/useProducts'; // Asegúrate de que la ruta sea correcta
import '../styles/ProductList.css';

const ProductList = () => {
  const { productList, updateStock } = useProducts(); // Obtener productos y la función de actualización
  const [newQuantity, setNewQuantity] = useState(0); // Para guardar la nueva cantidad ingresada por el usuario

  const handleQuantityChange = (productId) => {
    if (newQuantity > 0) {
      updateStock(productId, newQuantity); // Llamada para actualizar el stock
      setNewQuantity(0); // Limpiar el campo después de actualizar
    } else {
      alert('Por favor, ingrese una cantidad válida.');
    }
  };

  return (
    <div className="product-list">
      <h1>Lista de Productos</h1>
      {productList.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Categoría: {product.category}</p>
          <p>Precio: ${product.price}</p>
          
          <input
            type="number"
            value={newQuantity}
            onChange={(e) => setNewQuantity(parseInt(e.target.value))}
            placeholder="Nueva cantidad"
          />
          <button onClick={() => handleQuantityChange(product.id)}>Actualizar Stock</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
