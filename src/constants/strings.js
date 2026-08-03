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
    blog: 'Blog',
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
  blog: {
    title: 'Desde el blog',
    subtitle:
      'Lo que aprendemos trabajando con datos reales de empresas reales. Sin humo.',
    readMore: 'Leer artículo',
    readLess: 'Cerrar',
    items: [
      {
        id: 1,
        icon: 'FiBarChart2',
        category: 'Analítica',
        date: '14 de julio, 2026',
        readTime: '4 min de lectura',
        title: 'Tu dashboard no se usa. El problema no es el dashboard.',
        excerpt:
          'La mayoría de los tableros que construimos para clientes nuevos vienen a reemplazar uno que ya existía y que nadie abría. Estas son las tres razones que encontramos casi siempre.',
        body: [
          'Un patrón que se repite: la empresa ya pagó por un dashboard. Se ve bien. Tiene doce gráficas. Y hace cuatro meses que nadie lo abre. Antes de proponer nada, preguntamos por qué dejó de usarse, y la respuesta casi nunca tiene que ver con la herramienta.',
          'La primera razón es que responde preguntas que nadie hizo. Se construyó a partir de los datos disponibles en lugar de las decisiones pendientes. Si tu jefe de operaciones decide cada lunes cuánto inventario mover, el tablero tiene que contestar exactamente eso. Un gráfico de ventas acumuladas por trimestre es interesante, pero no cambia lo que hace el lunes.',
          'La segunda es que llega tarde. Un número que se actualiza el día 10 sobre lo que pasó el mes anterior sirve para reportar, no para decidir. Si la decisión es semanal, el dato tiene que ser semanal. Esto suele ser un problema de infraestructura, no de visualización: nadie automatizó la carga y alguien la actualiza a mano cuando se acuerda.',
          'La tercera es la más incómoda: el número aparece, pero nadie sabe qué hacer con él. El tablero dice que la merma subió a 4.2% y ahí termina la historia. No hay umbral, no hay responsable, no hay siguiente paso. Un indicador sin una acción asociada es decoración.',
          'Cuando arrancamos un proyecto no empezamos preguntando qué datos tienes. Empezamos preguntando qué decisiones tomas cada semana, quién las toma y con qué información las está tomando hoy. El tablero sale de ahí. A veces resulta que no necesitabas doce gráficas, sino tres números y una alerta por correo.',
        ],
      },
      {
        id: 2,
        icon: 'FiDatabase',
        category: 'Infraestructura',
        date: '26 de junio, 2026',
        readTime: '5 min de lectura',
        title: '¿Cuándo deja Excel de ser suficiente?',
        excerpt:
          'Excel no es el enemigo y migrar todo a una base de datos rara vez es la respuesta. Pero hay cuatro señales bastante claras de que ya te quedó chico.',
        body: [
          'Cada tanto llega alguien convencido de que su problema es que "todavía usan Excel". Casi nunca es cierto. Excel es una herramienta excelente y muchas empresas operan perfectamente con ella durante años. El problema aparece cuando la hoja de cálculo dejó de ser una herramienta y se convirtió en la base de datos de la empresa sin que nadie lo decidiera.',
          'La primera señal es el archivo del archivo. Tienes Ventas_2026_final_v3_REVISADO.xlsx y nadie está totalmente seguro de cuál es el bueno. Cuando la versión correcta de la verdad depende de recordar quién guardó al último, ya perdiste el control de tus datos.',
          'La segunda es el reporte que toma dos días. Si cerrar el mes implica que una persona dedique dos jornadas completas a copiar, pegar y cuadrar, no estás pagando por un reporte: estás pagando dos días de un sueldo cada mes, para siempre. Ese costo casi nunca aparece en ningún presupuesto y suele ser mayor que el de automatizarlo.',
          'La tercera es que dos personas dan dos números distintos para la misma pregunta. Ambas tienen razón según su archivo. Esto no es un error de captura, es que no existe una definición única de qué cuenta como venta, como cliente activo o como pedido entregado. Ninguna herramienta arregla eso sola: hay que sentarse a acordarlo.',
          'La cuarta es la macro que nadie toca. La hizo alguien que ya no trabaja ahí, funciona, y existe un miedo colectivo a abrirla. Ese archivo es un punto único de falla operando en producción sin que nadie lo llame así.',
          'Si reconoces dos o más de estas, el siguiente paso no es migrar todo a una base de datos. Es identificar cuáles de esos procesos justifican el cambio y cuáles pueden seguir viviendo en una hoja de cálculo sin problema. En la mayoría de los casos que hemos visto, mover entre el 20% y el 30% de los procesos resuelve el 80% del dolor. El resto puede esperar.',
        ],
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
