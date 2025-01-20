// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import '../styles/CheckoutPage.css';

function CheckoutPage({ sales, totalSales, handleReturn }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSales = sales.filter((sale) =>
    sale.saleNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getSaleTotal = (sale) => {
    return sale.items.reduce((subtotal, item) => {
      return subtotal + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className="checkout-page">
      <h2 className="checkout-page__title">Historial de Ventas</h2>

      <input
        type="text"
        placeholder="Buscar venta..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="checkout-page__search"
      />

      {filteredSales.length === 0 ? (
        <p className="checkout-page__message">No se han realizado ventas aún.</p>
      ) : (
        <div>
          <h3>Ventas Realizadas</h3>
          <ul className="checkout-page__sales-list">
            {filteredSales.map((sale, index) => {
              const saleTotal = getSaleTotal(sale);
              return (
                <li key={index} className="checkout-page__sales-list__item">
                  <strong>{sale.saleNumber}</strong> - {new Date(sale.date).toLocaleString()}
                  <ul>
                    {sale.items.map((item, i) => (
                      <li key={i}>
                        {item.name} - {item.quantity} x ${item.price} = ${item.price * item.quantity}
                      </li>
                    ))}
                  </ul>
                  <h4 className="checkout-page__sales-list__item--total">
                    Total de esta Venta: ${saleTotal.toFixed(2)}
                  </h4>
                  <button
                    onClick={() => handleReturn(sale.saleNumber)}
                    className="checkout-page__sales-list__item--button"
                  >
                    Devolver
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <h3 className="checkout-page__total">
        Total Acumulado de Ventas: ${totalSales.toFixed(2)}
      </h3>
    </div>
  );
}

export default CheckoutPage;
