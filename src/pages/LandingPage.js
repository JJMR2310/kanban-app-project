import React from 'react';

function LandingPage() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-2xl font-bold">KanbanApp</h1>
        <nav className="space-x-4">
          <a href="#features" className="text-gray-700">Características</a>
          <a href="#cta" className="text-gray-700">Iniciar Sesión</a>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Empieza Ahora</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 bg-blue-100">
        <h2 className="text-4xl font-bold mb-4">Organiza tus tareas fácilmente</h2>
        <p className="text-lg text-gray-700 mb-6">Crea, organiza y realiza un seguimiento de tus proyectos con facilidad.</p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded">Regístrate Gratis</button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 px-6">
        <h3 className="text-3xl font-bold text-center mb-8">Características Clave</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h4 className="text-xl font-bold">Tablero Kanban</h4>
            <p className="text-gray-600">Organiza tus tareas de forma visual e intuitiva.</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">Temporizadores</h4>
            <p className="text-gray-600">Optimiza tu tiempo con técnicas de productividad.</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold">Integraciones</h4>
            <p className="text-gray-600">Añade funcionalidad con APIs como OpenWeather y YouTube.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-800 text-white">
        <p>© 2024 KanbanApp. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
