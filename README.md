# Complejo Costa Garay - Landing Page

Una landing page moderna y elegante para un complejo de cabañas de lujo en Potrero de Garay, Córdoba, Argentina.

## 🏔️ Características

- **React + TypeScript** con Vite para desarrollo rápido
- **Tailwind CSS** para styling moderno y responsive
- **Atomic Design** para arquitectura de componentes escalable
- **Metodología BEM** para naming consistente
- **Animaciones suaves** y efectos de scroll
- **Diseño responsive** optimizado para todos los dispositivos
- **SVGs generados** representando el lago San Roque y las sierras
- **Botón de WhatsApp accesible** y sticky
- **SEO optimizado** con meta tags apropiados

## 🚀 Inicio Rápido

### Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### Configuración

1. **WhatsApp**: Actualizar el número de teléfono en `src/components/molecules/WhatsAppButton.tsx`
2. **Imágenes**: Reemplazar los SVGs por fotografías reales en las cabañas
3. **Contenido**: Personalizar textos en cada componente según necesidades

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── atoms/          # Componentes básicos (Button, Typography, Image)
│   ├── molecules/      # Combinaciones simples (CabinCard, FeatureCard, WhatsAppButton)
│   ├── organisms/      # Secciones complejas (Navigation, HeroSection, etc.)
│   └── templates/      # Layout completo (LandingPageTemplate)
├── index.css          # Estilos globales y utilidades
├── main.tsx           # Entry point
└── App.tsx            # Componente principal
```

## 🎨 Paleta de Colores

- **Primary**: Azules para elementos principales
- **Earth**: Tonos tierra para naturalidad
- **Forest**: Verdes para conexión con la naturaleza

## 📱 Responsive Design

- **Mobile**: Optimizado para dispositivos móviles
- **Tablet**: Layout adaptado para tablets
- **Desktop**: Experiencia completa para escritorio

## 🔧 Personalización

### Cambiar Contenido
Los textos están en español argentino y pueden modificarse directamente en cada componente.

### Agregar Fotografías
1. Crear carpeta `public/images/`
2. Reemplazar `imageSrc` en `CabinsSection.tsx` con rutas a imágenes reales
3. Actualizar el hero background con fotografía panorámica

### Modificar Estilos
Usar las clases de Tailwind CSS o extender en `src/index.css`

## 🌟 Características Premium

- Animaciones CSS suaves y naturales
- Efectos parallax y floating
- Glass morphism en elementos overlay
- Gradientes sutiles y shadows
- Micro-interacciones pulidas

## 📞 Contacto

Para modificaciones o soporte técnico, contactar al desarrollador.

---

Desarrollado con ❤️ para Potrero de Garay, Córdoba
