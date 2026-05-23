import React from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const Catalogo = () => {
  const { addToCart } = useCart();

  const allProducts = [
    { emoji: '🥭', name: 'Mango Tommy', price: '3.500', discount: 15 },
    { emoji: '🥑', name: 'Aguacate Hass', price: '4.200', discount: null },
    { emoji: '🍊', name: 'Naranja Valencia', price: '2.800', discount: 20 },
    { emoji: '🍓', name: 'Fresa Premium', price: '5.200', discount: null },
    { emoji: '🍈', name: 'Papaya Maradol', price: '2.500', discount: null },
    { emoji: '🍍', name: 'Piña Golden', price: '3.800', discount: 10 },
    { emoji: '🍌', name: 'Banano Premium', price: '2.200', discount: null },
    { emoji: '🍇', name: 'Uvas Rojas', price: '6.500', discount: null },
    { emoji: '🥝', name: 'Kiwi Green', price: '4.800', discount: 15 }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} agregado al carrito ✓`);
  };

  return (
    <main>
      <section className="catalog-page">
        <div className="catalog-header">
          <h1 className="page-title">Catálogo de Productos</h1>
          <p className="page-subtitle">Explora nuestra selección completa de frutas frescas</p>
        </div>

        <div className="catalog-filters">
          <button className="filter-chip active">🥭 Tropicales</button>
          <button className="filter-chip">🍊 Cítricos</button>
          <button className="filter-chip">🍓 Temporada</button>
          <button className="filter-chip">🥝 Importadas</button>
          <button className="filter-chip">💰 Ofertas</button>
        </div>

        <div className="catalog-grid">
          {allProducts.map((product, index) => (
            <ProductCard
              key={index}
              emoji={product.emoji}
              name={product.name}
              price={product.price}
              discount={product.discount}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Catalogo;
