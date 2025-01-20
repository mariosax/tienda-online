// src/components/SearchBar.jsx
import React, { useState, useEffect } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Ejecuta la búsqueda cada vez que el query cambie
  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="search-bar__input"
        placeholder="Buscar productos..."
      />
    </div>
  );
};

export default SearchBar;
