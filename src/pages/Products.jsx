// src/pages/Products.jsx
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { productsData } from '../data/products';
import '../styles/Products.css';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState(productsData);

  const handleSearch = (query) => {
    const filteredProducts = productsData.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="products">
      <SearchBar onSearch={handleSearch} />
      <div className="products__list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
