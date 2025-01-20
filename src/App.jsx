// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import Returns from './pages/Returns';
import NotFound from './pages/NotFound';
import CheckoutPage from './pages/CheckoutPage';
import useProducts from './hooks/useProducts';

function App() {
  const { productList } = useProducts();
  const [cart, setCart] = useState([]); // Estado del carrito
  const [sales, setSales] = useState([]); // Historial de ventas
  const [totalSales, setTotalSales] = useState(0); // Total acumulado de ventas

  // Agregar o actualizar un producto en el carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productInCart = prevCart.find(item => item.id === product.id);
      if (productInCart) {
        // Si el producto ya está en el carrito, incrementamos la cantidad
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Si el producto no está en el carrito, lo agregamos con cantidad 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Actualizar la cantidad de un producto en el carrito
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Manejar la venta y actualizar historial
  const handleSale = (cart, total) => {
    const sale = {
      saleNumber: `Venta-${Math.random().toString(36).substring(2, 9)}`,
      date: new Date(),
      items: cart,
      total: total,
    };

    // Actualizamos el historial de ventas
    setSales((prevSales) => [...prevSales, sale]);

    // Actualizamos el total acumulado de ventas
    setTotalSales((prevTotal) => prevTotal + total);

    // Limpiamos el carrito después de la venta
    setCart([]);
  };

  // Función para manejar la devolución de una venta
  const handleReturn = (saleNumber) => {
    // Encontrar la venta que se está devolviendo
    const saleToReturn = sales.find(sale => sale.saleNumber === saleNumber);

    // Restar el total de la venta al acumulado
    const saleTotal = saleToReturn ? saleToReturn.total : 0;

    // Eliminar la venta del historial de ventas
    setSales((prevSales) => prevSales.filter(sale => sale.saleNumber !== saleNumber));

    // Restar el total de la venta al acumulado de ventas
    setTotalSales((prevTotal) => prevTotal - saleTotal);
  };

  return (
    <Router>
      <Header cart={cart} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} handleSale={handleSale} />} />
          <Route path="/checkout" element={<CheckoutPage sales={sales} totalSales={totalSales} handleReturn={handleReturn} />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
