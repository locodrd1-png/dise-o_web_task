# 🍓 FrutiFresh - Tienda Online de Frutas Frescas

Aplicación web completa desarrollada en React basada en el wireframe diseñado en Figma.

## 📋 Descripción

FrutiFresh es una tienda online de frutas frescas que permite a los usuarios explorar productos, navegar por categorías y contactar con la empresa. El proyecto está construido con React y React Router para una experiencia de navegación fluida.

## ✨ Características

- ✅ **Página de Inicio** - Hero banner, categorías, productos destacados y beneficios
- ✅ **Catálogo Completo** - 9 productos con sistema de filtros
- ✅ **Página de Contacto** - Formulario funcional con información de contacto
- ✅ **Navegación con React Router** - Navegación SPA sin recargas
- ✅ **Diseño Responsive** - Adaptable a desktop, tablet y móvil
- ✅ **Componentes Reutilizables** - Arquitectura modular y mantenible

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

```bash
# Clonar o descargar el proyecto
cd frutifresh-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

### Otros Comandos

```bash
# Construir para producción
npm run build

# Ejecutar tests
npm test

# Analizar bundle
npm run build
npx source-map-explorer 'build/static/js/*.js'
```

## 📁 Estructura del Proyecto

```
frutifresh-app/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── CategoryCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Catalogo.jsx
│   │   └── Contacto.jsx
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```

## 🎨 Tecnologías Utilizadas

- **React** 18.2.0 - Biblioteca para interfaces de usuario
- **React Router DOM** 6.20.0 - Navegación entre páginas
- **CSS3** - Estilos personalizados con variables CSS
- **Google Fonts** - Tipografía Inter

## 🎯 Páginas Disponibles

### Página Principal (`/`)
- Hero banner con CTA
- 4 categorías de frutas
- 3 productos destacados
- 4 beneficios de la tienda
- Footer completo

### Catálogo (`/catalogo`)
- 9 productos disponibles
- Filtros por categoría
- Botones para agregar al carrito

### Contacto (`/contacto`)
- Formulario de contacto funcional
- Información de contacto (dirección, teléfono, email, horarios)
- Botones de redes sociales

## 🎨 Paleta de Colores

```css
--verde-principal: #4CAF50   /* Botones principales, logo */
--verde-claro: #8BC34A       /* Acentos, fondos suaves */
--naranja: #FF9800           /* Badges, carrito */
--amarillo: #FFC107          /* Categorías especiales */
--azul: #2196F3              /* Enlaces, información */
--gris-fondo: #F5F5F5        /* Fondos de secciones */
--gris-medio: #9E9E9E        /* Textos secundarios */
--negro-texto: #212121       /* Textos principales */
--blanco: #FFFFFF            /* Fondos, textos en oscuro */
```

## 📝 Tipografía

- **Fuente:** Inter (Google Fonts)
- **Pesos:** 400 (Regular), 600 (Semi Bold), 700 (Bold)
- **Tamaños:** 13px - 52px según jerarquía

## 🔧 Personalización

### Modificar Productos

Edita el array `allProducts` en `/src/pages/Catalogo.jsx`:

```jsx
const allProducts = [
  { emoji: '🥭', name: 'Mango Tommy', price: '3.500', discount: 15 },
  // Agrega más productos aquí
];
```

### Modificar Categorías

Edita el array `categories` en `/src/pages/Home.jsx`:

```jsx
const categories = [
  { emoji: '🥭', name: 'Frutas Tropicales', color: '#FF9800' },
  // Agrega más categorías aquí
];
```

### Modificar Colores

Edita las variables CSS en `/src/styles/App.css`:

```css
:root {
  --verde-principal: #4CAF50;
  /* Modifica los colores aquí */
}
```

## 🚀 Próximas Mejoras Sugeridas

### Funcionalidades
- [ ] Sistema de carrito de compras completo
- [ ] Autenticación de usuarios
- [ ] Integración con pasarela de pago
- [ ] Sistema de búsqueda de productos
- [ ] Filtros avanzados en catálogo
- [ ] Sistema de reviews y calificaciones
- [ ] Gestión de pedidos

### Técnicas
- [ ] Context API para estado global
- [ ] Conexión con backend/API
- [ ] Lazy loading de imágenes
- [ ] Optimización SEO
- [ ] PWA (Progressive Web App)
- [ ] Tests unitarios y de integración
- [ ] Internacionalización (i18n)

## 📱 Responsive Design

El diseño se adapta automáticamente a:
- **Desktop:** > 1200px - Grid de 3-4 columnas
- **Tablet:** 768px - 1200px - Grid de 2 columnas
- **Mobile:** < 768px - Grid de 1 columna

## 🤝 Contribuir

Si deseas contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto fue creado con fines educativos basado en el wireframe de FrutiFresh.

## 👨‍💻 Autor

Proyecto desarrollado como parte de un ejercicio de diseño web y desarrollo React.

## 📧 Contacto

Para consultas sobre el proyecto, puedes contactar a través de las issues del repositorio.

---

**Creado con:** React + React Router + CSS  
**Basado en:** Wireframe FrutiFresh de Figma  
**Fecha:** Mayo 2026  
**Versión:** 1.0.0
