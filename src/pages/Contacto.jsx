import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      <section className="contact-page">
        <div className="contact-header">
          <h1 className="page-title">📞 Contáctanos</h1>
          <p className="page-subtitle">Estamos aquí para ayudarte. Escríbenos y te responderemos pronto.</p>
        </div>

        <div className="contact-container">
          <div className="contact-form-container">
            <h2 className="form-title">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+57 300 123 4567"
                />
              </div>

              <div className="form-group">
                <label>Mensaje</label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                ✉️ Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="contact-info-container">
            <h2 className="info-title">Información de Contacto</h2>
            
            <div className="contact-info-item">
              <div className="info-icon">📍</div>
              <div>
                <h3>Dirección</h3>
                <p>Calle 100 # 45-67<br />Cali, Valle del Cauca<br />Colombia</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">📞</div>
              <div>
                <h3>Teléfono</h3>
                <p>+57 (2) 555-1234<br />+57 300 123 4567</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>info@frutifresh.com<br />ventas@frutifresh.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">🕐</div>
              <div>
                <h3>Horario</h3>
                <p>Lun - Vie: 7:00 AM - 8:00 PM<br />Sáb - Dom: 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="social-section">
              <h3>Síguenos</h3>
              <div className="social-buttons">
                <button className="social-btn">📘 Facebook</button>
                <button className="social-btn">📷 Instagram</button>
                <button className="social-btn">🐦 Twitter</button>
                <button className="social-btn">💼 LinkedIn</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
