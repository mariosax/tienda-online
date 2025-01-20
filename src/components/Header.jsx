import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ cart }) => {
  return (
    <header className="header">
      <h1 className="header__title">Bodega Web</h1>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <Link to="/" className="header__link">Inicio</Link>
          </li>
          <li className="header__list-item">
            <Link to="/products" className="header__link">Productos</Link>
          </li>
          <li className="header__list-item">
            <Link to="/cart" className="header__link header__link--cart" data-count={cart.length}>
              Carrito 
            </Link>
          </li>
          <li className="header__list-item">
            <Link to="/checkout" className="header__link">Devoluciones</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
