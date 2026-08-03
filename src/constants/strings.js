export const STRINGS = {
  site: {
    title: 'VizData',
    tagline: 'Tu partner en datos. Desde análisis hasta decisiones.',
    year: new Date().getFullYear(),
  },
  nav: {
    services: 'Servicios',
    process: 'Nuestro Proceso',
    testimonials: 'Testimonios',
    faq: 'Preguntas',
    contact: 'Contacto',
  },
  hero: {
    title: 'VizData',
    subtitle: 'No vendemos software. Somos tu partner en datos.',
    description:
      'Ya tengas una infraestructura de datos o partas de cero, nos adaptamos a ti. En 1-3 meses, tu equipo toma decisiones más rápido basadas en datos reales, no en intuición.',
    cta: 'Agenda tu consultoría',
    secondary: 'Ver cómo funciona',
  },
  services: {
    title: '¿Dónde estás en tu camino de datos?',
    subtitle: 'Entramos donde tú necesitas. Flexible. Sin compromisos previos.',
    items: [
      {
        id: 'basic',
        name: 'Ya tengo datos',
        icon: 'FiTrendingUp',
        description:
          'Tienes tu infraestructura de datos lista. Solo necesitas visualizaciones e insights claros para decidir mejor.',
        price: 'MXN 20,000 – 40,000',
        label: 'Más info',
      },
      {
        id: 'intermediate',
        name: 'Necesito estructura',
        icon: 'FiDatabase',
        description:
          'Tienes datos dispersos en Excel, SQL, APIs. Te ayudamos a centralizarlos, limpiarlos y visualizarlos en un dashboard integrado.',
        price: 'MXN 40,000 – 80,000 + MXN 4,000 – 6,000/mes',
        label: 'Más info',
        popular: true,
      },
      {
        id: 'premium',
        name: 'Soporte continuo',
        icon: 'FiAward',
        description:
          'Solución completa: infraestructura, dashboards e informes mensuales con insights y recomendaciones. Nosotros optimizamos, tú decides.',
        price: 'MXN 60,000 – 120,000 + MXN 8,000 – 12,000/mes',
        label: 'Más info',
      },
    ],
  },
  process: {
    title: 'Nuestra Metodología',
    subtitle: 'Partnering desde el día 1.',
    steps: [
      {
        id: 'discovery',
        icon: 'FiSearch',
        name: 'Discovery',
        description: 'Escuchamos. Entendemos tu negocio, tus datos, tus retos reales.',
      },
      {
        id: 'engineering',
        icon: 'FiGitBranch',
        name: 'Ingeniería de Datos',
        description: 'Construimos la arquitectura: integración, limpieza, automatización.',
      },
      {
        id: 'dashboard',
        icon: 'FiBarChart2',
        name: 'Análisis & Dashboards',
        description: 'Visualizamos lo que importa. Datos accionables para cada decisor.',
      },
      {
        id: 'support',
        icon: 'FiHeadphones',
        name: 'Soporte Continuo',
        description: 'Monitoreo, optimización y soporte. Estamos para crecer contigo.',
      },
    ],
  },
  testimonials: {
    title: 'Lo que dicen nuestros clientes',
    items: [
      {
        id: 1,
        quote:
          'VizData no solo nos dio un dashboard, nos dio claridad. Ahora vemos en tiempo real qué pasa en cada tienda. Nuestro CEO toma decisiones 10x más rápido.',
        author: 'María Gómez',
        company: 'Gerente Operaciones - Retail',
        initials: 'MG',
        rating: 5,
      },
      {
        id: 2,
        quote:
          'Lo mejor: se adaptaron exactamente a nuestros datos (SQL + Excel + APIs) y el soporte continuo. No es un software que instalas y te dejan solo.',
        author: 'Carlos López',
        company: 'CFO - Manufactura',
        initials: 'CL',
        rating: 5,
      },
      {
        id: 3,
        quote:
          'El equipo entiende negocio, no solo código. Nos ayudaron a detectar ineficiencias que estaban escondidas. Puro ROI.',
        author: 'Ana Rodríguez',
        company: 'Director Operaciones - Logística',
        initials: 'AR',
        rating: 5,
      },
    ],
  },
  faq: {
    title: 'Preguntas Frecuentes',
    items: [
      {
        id: 1,
        question: '¿Cuánto tiempo lleva implementar y empezar a ver resultados?',
        answer:
          'Generalmente 2-4 semanas hasta tu primer dashboard en vivo. Los planes Intermedio y Premium ofrecen soporte continuo para optimizar después. El tiempo depende de la complejidad y disponibilidad de tus datos.',
      },
      {
        id: 2,
        question:
          '¿Qué pasa si tengo datos en múltiples lugares (Excel, SQL, APIs, Google Sheets)?',
        answer:
          'Exactamente para eso estamos. Integramos todas tus fuentes de datos en un único lugar centralizado. El plan Intermedio incluye esta integración. Tu dashboard único, datos consolidados.',
      },
      {
        id: 3,
        question: '¿Necesito tener un equipo IT fuerte para usar esto?',
        answer:
          'No. Nosotros manejamos la infraestructura y la ingeniería de datos. Tu equipo usa dashboards intuitivos. Ofrecemos capacitación y soporte continuo (Intermedio y Premium).',
      },
      {
        id: 4,
        question: '¿Cuál es la diferencia entre los 3 planes?',
        answer:
          'Básico: solo dashboard (tienes data lista). Intermedio: integramos, limpiamos y creamos infraestructura + soporte. Premium: todo + informes mensuales con insights y recomendaciones estratégicas.',
      },
      {
        id: 5,
        question: '¿Qué pasa después? ¿Me dejan solo o hay soporte continuo?',
        answer:
          'Los planes Intermedio y Premium incluyen soporte continuo: monitoreo, actualizaciones, optimizaciones y cambios según tus necesidades. Eres nuestro partner, no solo cliente.',
      },
    ],
  },
  contact: {
    title: 'Empecemos',
    subtitle: 'Cuéntanos sobre tus datos y tus retos. Agendaremos una consultoría sin costo.',
    labels: {
      name: 'Nombre completo',
      email: 'Email empresarial',
      message: 'Cuéntanos: ¿Dónde estás con tus datos? ¿Cuál es tu reto principal?',
      send: 'Agendar consultoría',
    },
  },
  footer: {
    copyright: '© {year} VizData. Todos los derechos reservados.',
    company: 'VizData',
    links: [
      { label: 'Quiénes somos', href: '#' },
      { label: 'Nuestro equipo', href: '#' },
      { label: 'Contacto', href: '#contact' },
    ],
    legal: 'Legal',
    legalLinks: [
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Términos de Servicio', href: '#' },
    ],
  },
};
