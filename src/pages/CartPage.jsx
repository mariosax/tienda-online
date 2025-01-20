// src/pages/CartPage.jsx
import React, { useState } from 'react';
import '../styles/CartPage.css';

function CartPage({ cart, removeFromCart, updateQuantity, handleSale }) {
  // Calcular el total de la compra
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const cartTotal = getCartTotal();

  const handlePayment = (cart, total) => {
    handleSale(cart, total);
    setPaymentSuccess(true);  // Mostrar el mensaje de éxito
    setTimeout(() => {
      setPaymentSuccess(false);  // Ocultar el mensaje después de 3 segundos
    }, 3000);
  };

  return (
    <div className="cart-page">
      <h2 className="cart-page__title">Carrito de Compras</h2>
      
      {paymentSuccess && (
        <div className="cart-page__success-message">
          <p>¡Pago realizado con éxito!</p>
        </div>
      )}
      
      {cart.length === 0 ? (
        <p className="cart-page__empty-message">El carrito está vacío.</p>
      ) : (
        <div className="cart-page__items">
          <ul className="cart-page__list">
            {cart.map(item => (
              <li key={item.id} className="cart-page__item">
                <span className="cart-page__item-name">{item.name}</span> - 
                <span className="cart-page__item-quantity">{item.quantity}</span> x 
                <span className="cart-page__item-price">${item.price}</span> = 
                <span className="cart-page__item-total">${item.price * item.quantity}</span>
                
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="cart-page__button cart-page__button--remove">
                  Eliminar
                </button>
                
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                  className="cart-page__button cart-page__button--increase">
                  +
                </button>
                
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                  className="cart-page__button cart-page__button--decrease">
                  -
                </button>
              </li>
            ))}
          </ul>
          
          <h3 className="cart-page__total">Total: ${cartTotal.toFixed(2)}</h3>
          
          <button 
            onClick={() => handlePayment(cart, cartTotal)} 
            className="cart-page__button cart-page__button--pay">
            Pagar
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
