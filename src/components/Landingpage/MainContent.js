import React from "react";

const MainContent = () => {
    return(
        <main>
            <section className="HeroSection">
                <h2>Organiza tus tareas facilmente</h2>
                <p>Crea, organiza y realiza un seguimiento de tus proyectos con facilidad.</p>
                <button className="Register">Regístrate Gratis</button>
            </section>
            <section id="FeaturesSection">
                <h3>Características Clave</h3>
                <p>Organiza tus tareas de forma visual e intuitiva</p>
                <h4>Temporizadores</h4>
                <p>Optimiza tu tiempo con técnicas de productividad</p>
                <h4>Integraciones</h4>
                <p>Añade funcionalidad con APIs como OpenWeather y YouTube</p>
            </section>
        </main>
    );
};

export default MainContent;