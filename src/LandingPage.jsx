import React from 'react';

// Usa el logo desde public/
const logo = process.env.PUBLIC_URL + '/VizData.png';

export default function LandingPage() {
  return (
    <div className="font-sans text-[#34495E]">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-white py-12">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <img src={logo} alt="VizData Logo" className="h-20 w-auto mb-4" />
          <h1 className="text-5xl font-bold mb-2">VizData</h1>
          <p className="text-xl mb-6">Transformamos tus datos en decisiones</p>
          <a
            href="mailto:contacto@vizdata.mx?subject=Agenda%20tu%20demo"
            className="bg-[#1ABC9C] hover:bg-[#16A085] text-white font-semibold py-3 px-8 rounded shadow transition"
          >
            Agenda tu demo
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-[#ECF0F1]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-2xl font-bold mb-4">Básico</h3>
              <p className="mb-6">Dashboard sencillo para visualizar tus indicadores clave.</p>
              <p className="font-semibold mb-4">MXN 20,000 – 40,000</p>
              <a
                href="mailto:contacto@vizdata.mx?subject=Info%20Paquete%20Básico"
                className="inline-block bg-[#1ABC9C] hover:bg-[#16A085] text-white font-semibold py-2 px-4 rounded"
              >
                Más info
              </a>
            </div>
            {/* Intermediate */}
            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-2xl font-bold mb-4">Intermedio</h3>
              <p className="mb-6">Creación y gestión de tu base de datos + dashboard.</p>
              <p className="font-semibold mb-4">MXN 40,000 – 80,000 + MXN 4,000 – 6,000/mes</p>
              <a
                href="mailto:contacto@vizdata.mx?subject=Info%20Paquete%20Intermedio"
                className="inline-block bg-[#1ABC9C] hover:bg-[#16A085] text-white font-semibold py-2 px-4 rounded"
              >
                Más info
              </a>
            </div>
            {/* Premium */}
            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="mb-6">Dashboard + informes mensuales con insights y recomendaciones.</p>
              <p className="font-semibold mb-4">MXN 60,000 – 120,000 + MXN 8,000 – 12,000/mes</p>
              <a
                href="mailto:contacto@vizdata.mx?subject=Info%20Paquete%20Premium"
                className="inline-block bg-[#1ABC9C] hover:bg-[#16A085] text-white font-semibold py-2 px-4 rounded"
              >
                Más info
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Nuestro Proceso</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🔍</div>
              <h4 className="font-bold mb-2">Discovery</h4>
              <p>Entendemos tus necesidades y datos.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🛠️</div>
              <h4 className="font-bold mb-2">Data Engineering</h4>
              <p>Diseñamos tu base y procesos de datos.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📊</div>
              <h4 className="font-bold mb-2">Dashboard</h4>
              <p>Creamos visualizaciones interactivas.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="font-bold mb-2">Soporte</h4>
              <p>Monitoreo y mejoras continuas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#ECF0F1]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-8 rounded-2xl shadow">
              <p className="italic mb-4">"Gracias a VizData, pudimos reducir un 20% el tiempo de reporte mensual."</p>
              <footer className="font-bold">– Cliente XYZ, Retail</footer>
            </blockquote>
            <blockquote className="bg-white p-8 rounded-2xl shadow">
              <p className="italic mb-4">"La detección de anomalías que nos presentaron fue clave para ajustar nuestro inventario."</p>
              <footer className="font-bold">– Cliente ABC, Manufactura</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Contáctanos</h2>
          <p className="mb-8">Déjanos tus datos y nos pondremos en contacto.</p>
          <form
            action="mailto:contacto@vizdata.mx"
            method="POST"
            encType="text/plain"
            className="max-w-xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input name="Nombre" type="text" placeholder="Nombre" className="w-full p-3 rounded shadow" required />
              <input name="Correo" type="email" placeholder="Correo electrónico" className="w-full p-3 rounded shadow" required />
            </div>
            <textarea name="Mensaje" placeholder="Mensaje" className="w-full p-3 rounded shadow mb-4" rows={4} required />
            <button type="submit" className="bg-[#1ABC9C] hover:bg-[#16A085] text-white font-semibold py-3 px-8 rounded shadow transition">
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">© 2025 VizData. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:underline">Política de Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:underline">Términos de Servicio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
