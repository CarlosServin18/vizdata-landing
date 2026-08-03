export const STRINGS = {
  site: {
    title: 'VizData',
    tagline: 'Transformamos tus datos en decisiones',
    year: new Date().getFullYear(),
  },
  nav: {
    services: 'Nuestros Servicios',
    process: 'Nuestro Proceso',
    testimonials: 'Testimonios',
    contact: 'Contáctanos',
  },
  hero: {
    title: 'VizData',
    subtitle: 'Transformamos tus datos en decisiones',
    cta: 'Agenda tu demo',
  },
  services: {
    title: 'Nuestros Servicios',
    items: [
      {
        id: 'basic',
        name: 'Básico',
        description: 'Dashboard sencillo para visualizar tus indicadores clave.',
        price: 'MXN 20,000 – 40,000',
        label: 'Más info',
      },
      {
        id: 'intermediate',
        name: 'Intermedio',
        description: 'Creación y gestión de tu base de datos + dashboard.',
        price: 'MXN 40,000 – 80,000 + MXN 4,000 – 6,000/mes',
        label: 'Más info',
        popular: true,
      },
      {
        id: 'premium',
        name: 'Premium',
        description: 'Dashboard + informes mensuales con insights y recomendaciones.',
        price: 'MXN 60,000 – 120,000 + MXN 8,000 – 12,000/mes',
        label: 'Más info',
      },
    ],
  },
  process: {
    title: 'Nuestro Proceso',
    steps: [
      {
        id: 'discovery',
        icon: '🔍',
        name: 'Discovery',
        description: 'Entendemos tus necesidades y datos.',
      },
      {
        id: 'engineering',
        icon: '🛠️',
        name: 'Data Engineering',
        description: 'Diseñamos tu base y procesos de datos.',
      },
      {
        id: 'dashboard',
        icon: '📊',
        name: 'Dashboard',
        description: 'Creamos visualizaciones interactivas.',
      },
      {
        id: 'support',
        icon: '🤝',
        name: 'Soporte',
        description: 'Monitoreo y mejoras continuas.',
      },
    ],
  },
  testimonials: {
    title: 'Testimonios',
    items: [
      {
        id: 1,
        quote: 'Gracias a VizData, pudimos reducir un 20% el tiempo de reporte mensual.',
        author: 'María Gómez',
        company: 'Retail Solutions',
      },
      {
        id: 2,
        quote: 'La detección de anomalías que nos presentaron fue clave para ajustar nuestro inventario.',
        author: 'Carlos López',
        company: 'Manufactura Avanzada',
      },
    ],
  },
  contact: {
    title: 'Contáctanos',
    subtitle: 'Déjanos tus datos y nos pondremos en contacto.',
    labels: {
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      send: 'Enviar',
    },
  },
  footer: {
    copyright: '© {year} VizData. Todos los derechos reservados.',
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
  },
};
