// src/components/ProductCard.jsx
import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card__image" />
      <h2 className="product-card__name">{product.name}</h2>
      <p className="product-card__description">{product.description}</p>
      <p className="product-card__price">${product.price}</p>
      <button onClick={() => onAddToCart(product)} className="product-card__button">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
