import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Bienvenido a nuestra Tienda Online</h1>
      <p className="home__description">Explora nuestros productos y realiza tu compra fácilmente.</p>
      <img
        src="/assets/Logo.png"
        alt="Tienda online"
        className="home-page__image"
      />
    </div>
  );
};

export default Home;
