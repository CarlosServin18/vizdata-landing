export const STRINGS = {
  site: {
    title: 'VizData',
    tagline: 'Transformamos tus datos en decisiones',
    year: new Date().getFullYear(),
  },
  nav: {
    services: 'Servicios',
    process: 'Proceso',
    testimonials: 'Testimonios',
    faq: 'Preguntas',
    contact: 'Contacto',
  },
  hero: {
    title: 'VizData',
    subtitle: 'Transformamos tus datos en decisiones',
    cta: 'Agenda tu demo',
    secondary: 'Ver servicios',
  },
  services: {
    title: 'Nuestros Servicios',
    items: [
      {
        id: 'basic',
        name: 'Básico',
        icon: '📊',
        description: 'Dashboard sencillo para visualizar tus indicadores clave.',
        price: 'MXN 20,000 – 40,000',
        label: 'Más info',
      },
      {
        id: 'intermediate',
        name: 'Intermedio',
        icon: '⚙️',
        description: 'Creación y gestión de tu base de datos + dashboard.',
        price: 'MXN 40,000 – 80,000 + MXN 4,000 – 6,000/mes',
        label: 'Más info',
        popular: true,
      },
      {
        id: 'premium',
        name: 'Premium',
        icon: '⭐',
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
        initials: 'MG',
        rating: 5,
      },
      {
        id: 2,
        quote: 'La detección de anomalías que nos presentaron fue clave para ajustar nuestro inventario.',
        author: 'Carlos López',
        company: 'Manufactura Avanzada',
        initials: 'CL',
        rating: 5,
      },
    ],
  },
  faq: {
    title: 'Preguntas Frecuentes',
    items: [
      {
        id: 1,
        question: '¿Cuánto tiempo toma implementar el dashboard?',
        answer:
          'Normalmente entre 2 a 4 semanas dependiendo de la complejidad de tus datos y requisitos específicos. Ofrecemos timeline personalizado tras el discovery.',
      },
      {
        id: 2,
        question: '¿Puedo cambiar el dashboard después de la entrega?',
        answer:
          'Sí, los planes Intermedio y Premium incluyen soporte continuo y mejoras. Podemos ajustar el diseño, agregar métricas o cambiar visualizaciones según necesites.',
      },
      {
        id: 3,
        question: '¿Qué ocurre si tengo problemas técnicos?',
        answer:
          'Nuestro equipo de soporte está disponible para los planes Intermedio y Premium. Ofrecemos monitoreo proactivo, actualizaciones de datos y asistencia técnica según tu plan.',
      },
      {
        id: 4,
        question: '¿Mis datos están seguros?',
        answer:
          'Sí, implementamos estándares de seguridad de nivel empresarial (HTTPS, encriptación, backups). Tus datos nunca se comparten ni se usan con otros clientes.',
      },
      {
        id: 5,
        question: '¿Puedo integrar datos de múltiples fuentes?',
        answer:
          'Absolutamente. Podemos conectar Excel, bases de datos SQL, APIs, Google Sheets y muchas otras fuentes. El plan Intermedio o Premium incluye esta integración.',
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
    company: 'Empresa',
    links: [
      { label: 'Sobre nosotros', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Carreras', href: '#' },
    ],
    legal: 'Legal',
    legalLinks: [
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Términos de Servicio', href: '#' },
    ],
  },
};
