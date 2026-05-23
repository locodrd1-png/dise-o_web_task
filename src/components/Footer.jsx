import React from 'react';

const Footer = () => {
  const footerColumns = [
    {
      title: 'FrutiFresh',
      items: ['Acerca de', 'Blog', 'Contacto']
    },
    {
      title: 'Servicio',
      items: ['Envíos', 'Devoluciones', 'FAQ']
    },
    {
      title: 'Legal',
      items: ['Términos', 'Privacidad', 'Cookies']
    }
  ];

  const socialLinks = [
    { icon: '📘', name: 'Facebook' },
    { icon: '📷', name: 'Instagram' },
    { icon: '🐦', name: 'Twitter' },
    { icon: '💼', name: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3 className="footer-logo">🍓 FrutiFresh</h3>
          <p className="footer-description">
            Tu tienda de frutas frescas<br />
            de confianza desde 2020
          </p>
        </div>
        
        <div className="footer-columns">
          {footerColumns.map((column, index) => (
            <div key={index} className="footer-column">
              <h4 className="footer-column-title">{column.title}</h4>
              <ul className="footer-links">
                {column.items.map((item, idx) => (
                  <li key={idx}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">© 2026 FrutiFresh. Todos los derechos reservados.</p>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a key={index} href="#" className="social-link">
              {social.icon} {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
