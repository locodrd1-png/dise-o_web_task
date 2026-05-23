import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getSubtotal, getDiscount, getShipping, getTotal, processOrder } = useCart();
  
  const [currentStep, setCurrentStep] = useState(2);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [shippingInfo, setShippingInfo] = useState({
    nombre: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    telefono: '',
    email: ''
  });

  const [paymentInfo, setPaymentInfo] = useState({
    metodo: 'tarjeta',
    numeroTarjeta: '',
    nombreTarjeta: '',
    expiracion: '',
    cvv: ''
  });

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleShippingChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value
    });
  };

  const formatPrice = (price) => {
    return price.toLocaleString('es-CO');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!termsAccepted) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }

    setIsProcessing(true);

    try {
      const result = await processOrder(shippingInfo, paymentInfo);
      if (result.success) {
        navigate('/confirmacion', { state: { orderData: result } });
      }
    } catch (error) {
      alert('Error al procesar la orden');
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    navigate('/carrito');
    return null;
  }

  return (
    <main>
      <section className="checkout-page">
        <h1 className="page-title">Checkout</h1>

        {/* Indicador de progreso */}
        <div className="progress-indicator">
          <div className="progress-step completed">
            <div className="step-circle">1</div>
            <span className="step-label">Carrito</span>
          </div>
          <div className="progress-line completed"></div>
          
          <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
            <div className="step-circle">2</div>
            <span className="step-label">Información</span>
          </div>
          <div className={`progress-line ${currentStep >= 3 ? 'completed' : ''}`}></div>
          
          <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
            <div className="step-circle">3</div>
            <span className="step-label">Pago</span>
          </div>
          <div className="progress-line"></div>
          
          <div className="progress-step">
            <div className="step-circle">4</div>
            <span className="step-label">Confirmación</span>
          </div>
        </div>

        <div className="checkout-container">
          {/* Formulario */}
          <div className="checkout-form-container">
            <form onSubmit={handleSubmit}>
              {/* Información de envío */}
              <div className="form-section">
                <h2 className="form-section-title">📦 Información de Envío</h2>
                
                <div className="form-row">
                  <div className="form-group full-width">
                    <label>Nombre completo *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={shippingInfo.nombre}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group full-width">
                    <label>Dirección *</label>
                    <input
                      type="text"
                      name="direccion"
                      value={shippingInfo.direccion}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Ciudad *</label>
                    <input
                      type="text"
                      name="ciudad"
                      value={shippingInfo.ciudad}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Código postal *</label>
                    <input
                      type="text"
                      name="codigoPostal"
                      value={shippingInfo.codigoPostal}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Teléfono *</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={shippingInfo.telefono}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Método de pago */}
              <div className="form-section">
                <h2 className="form-section-title">💳 Método de Pago</h2>

                <div className="payment-methods">
                  <label className={`payment-method ${paymentInfo.metodo === 'tarjeta' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="metodo"
                      value="tarjeta"
                      checked={paymentInfo.metodo === 'tarjeta'}
                      onChange={handlePaymentChange}
                    />
                    <span className="payment-icon">💳</span>
                    <span>Tarjeta de Crédito/Débito</span>
                  </label>

                  <label className={`payment-method ${paymentInfo.metodo === 'pse' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="metodo"
                      value="pse"
                      checked={paymentInfo.metodo === 'pse'}
                      onChange={handlePaymentChange}
                    />
                    <span className="payment-icon">🏦</span>
                    <span>PSE - Pago en línea</span>
                  </label>

                  <label className={`payment-method ${paymentInfo.metodo === 'efectivo' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="metodo"
                      value="efectivo"
                      checked={paymentInfo.metodo === 'efectivo'}
                      onChange={handlePaymentChange}
                    />
                    <span className="payment-icon">💵</span>
                    <span>Efectivo contra entrega</span>
                  </label>
                </div>

                {paymentInfo.metodo === 'tarjeta' && (
                  <div className="card-fields">
                    <div className="form-row">
                      <div className="form-group full-width">
                        <label>Número de tarjeta</label>
                        <input
                          type="text"
                          name="numeroTarjeta"
                          placeholder="1234 5678 9012 3456"
                          value={paymentInfo.numeroTarjeta}
                          onChange={handlePaymentChange}
                          maxLength="19"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group full-width">
                        <label>Nombre en la tarjeta</label>
                        <input
                          type="text"
                          name="nombreTarjeta"
                          placeholder="JUAN PEREZ"
                          value={paymentInfo.nombreTarjeta}
                          onChange={handlePaymentChange}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Fecha de expiración</label>
                        <input
                          type="text"
                          name="expiracion"
                          placeholder="MM/AA"
                          value={paymentInfo.expiracion}
                          onChange={handlePaymentChange}
                          maxLength="5"
                        />
                      </div>
                      <div className="form-group">
                        <label>CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          placeholder="123"
                          value={paymentInfo.cvv}
                          onChange={handlePaymentChange}
                          maxLength="4"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Términos y condiciones */}
              <div className="terms-section">
                <label className="terms-checkbox">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                  <span>Acepto los términos y condiciones y la política de privacidad</span>
                </label>
              </div>

              {/* Botón de finalizar */}
              <button 
                type="submit" 
                className="finish-order-button"
                disabled={isProcessing}
              >
                {isProcessing ? '🔄 Procesando...' : '🔒 Finalizar Compra'}
              </button>
            </form>
          </div>

          {/* Resumen del pedido */}
          <div className="checkout-summary">
            <h2 className="summary-title">Resumen del Pedido</h2>

            <div className="summary-products">
              {cartItems.map((item, index) => (
                <div key={index} className="summary-product">
                  <span className="summary-product-emoji">{item.emoji}</span>
                  <span className="summary-product-name">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="summary-product-price">
                    ${formatPrice(parseFloat(item.price.replace('.', '')) * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${formatPrice(getSubtotal())}</span>
            </div>

            <div className="summary-row">
              <span>Envío:</span>
              <span className={getShipping() === 0 ? 'free-shipping' : ''}>
                {getShipping() === 0 ? 'GRATIS' : `$${formatPrice(getShipping())}`}
              </span>
            </div>

            {getDiscount() > 0 && (
              <div className="summary-row discount-row">
                <span>Descuento:</span>
                <span>-${formatPrice(getDiscount())}</span>
              </div>
            )}

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total:</span>
              <span className="total-amount">${formatPrice(getTotal())}</span>
            </div>

            <div className="security-badge">
              <p>🔒 Compra 100% Segura</p>
              <p className="security-text">✓ Garantía de satisfacción</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
