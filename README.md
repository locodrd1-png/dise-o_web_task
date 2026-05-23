# 🍓 FrutiFresh - Tienda Online de Frutas Frescas

Aplicación web completa desarrollada en React basada en el wireframe diseñado en Figma.

## 📋 Descripción

FrutiFresh es una tienda online de frutas frescas que permite a los usuarios explorar productos, navegar por categorías y contactar con la empresa. El proyecto está construido con React y React Router para una experiencia de navegación fluida.

## ✨ Características

- ✅ **Página de Inicio** - Hero banner, categorías, productos destacados, beneficios y video explicativo
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
- Video explicativo del proyecto
- Footer completo

### Catálogo (`/catalogo`)
- 9 productos disponibles
- Filtros por categoría
- Botones para agregar al carrito

### Contacto (`/contacto`)
- Formulario de contacto funcional
- Información de contacto (dirección, teléfono, email, horarios)
- Botones de redes sociales


## 🎬 Video Explicativo

El video explicativo del proyecto está embebido directamente en la página de inicio y también disponible en YouTube:

[![Video Explicativo - FrutiFresh](https://img.youtube.com/vi/JiH_mCxilOk/maxresdefault.jpg)](https://www.youtube.com/watch?v=JiH_mCxilOk)

[Ver en YouTube →](https://www.youtube.com/watch?v=JiH_mCxilOk)
