import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const categories = [
    { emoji: '🥭', name: 'Frutas Tropicales', color: '#FF9800' },
    { emoji: '🍊', name: 'Cítricos', color: '#FFC107' },
    { emoji: '🍓', name: 'Frutas de Temporada', color: '#F44336' },
    { emoji: '🥝', name: 'Importadas', color: '#4CAF50' }
  ];

  const products = [
    { emoji: '🥭', name: 'Mango Tommy', price: '3.500', discount: 15 },
    { emoji: '🥑', name: 'Aguacate Hass', price: '4.200', discount: null },
    { emoji: '🍊', name: 'Naranja Valencia', price: '2.800', discount: 20 }
  ];

  const benefits = [
    { icon: '🚚', title: 'Envío Gratis', description: 'En compras mayores a $50.000', color: '#4CAF50' },
    { icon: '✅', title: '100% Frescas', description: 'Garantía de frescura y calidad', color: '#2196F3' },
    { icon: '⏰', title: 'Entrega Rápida', description: 'En menos de 24 horas', color: '#FF9800' },
    { icon: '💳', title: 'Pago Seguro', description: 'Múltiples métodos de pago', color: '#FFC107' }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} agregado al carrito ✓`);
  };

  return (
    <main>
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">
            Frutas Frescas<br />
            Directo a tu Puerta 🍎🥭
          </h1>
          <p className="hero-subtitle">
            Las mejores frutas de la región,<br />
            seleccionadas con cuidado para ti.<br />
            Frescas, saludables y deliciosas.
          </p>
          <button className="cta-button" onClick={() => navigate('/catalogo')}>
            Ver Catálogo →
          </button>
        </div>
        
        <div className="hero-image">
          <div className="fruit-grid">
            <span className="fruit-emoji">🍎</span>
            <span className="fruit-emoji">🍊</span>
            <span className="fruit-emoji">🍇</span>
            <span className="fruit-emoji">🍓</span>
            <span className="fruit-emoji">🥭</span>
            <span className="fruit-emoji">🍌</span>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Explora por Categorías</h2>
        <p className="section-subtitle">Encuentra tus frutas favoritas organizadas por tipo</p>
        
        <div className="categories-grid">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              emoji={category.emoji}
              name={category.name}
              color={category.color}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <div className="products-header">
          <h2 className="section-title">Productos Más Vendidos</h2>
          <span className="new-badge">✨ Nuevo</span>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
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

      {/* Why Choose Us */}
      <section className="benefits-section">
        <h2 className="section-title centered">¿Por qué elegirnos?</h2>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon" style={{ backgroundColor: `${benefit.color}20` }}>
                <span style={{ fontSize: '40px' }}>{benefit.icon}</span>
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
