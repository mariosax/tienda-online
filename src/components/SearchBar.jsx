import React, { useState, useEffect } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Este useEffect se ejecuta cada vez que query cambia
  useEffect(() => {
    console.log(`El usuario está buscando: ${query}`);
    // Aquí podrías realizar más acciones, como registrar eventos, etc.
  }, [query]); // Dependencia: se ejecutará cuando `query` cambie

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
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
