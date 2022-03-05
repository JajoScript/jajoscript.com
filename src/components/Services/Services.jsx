// Dependencias.
import React, { Component } from 'react';

// Estilos.
import './Services.css';

// Otros componentes.
import ServicesList from './ServicesList';

// Definición del componente.
export default class Services extends Component {
  render() {
    return (
      <section id="services">
        <p className="small_text text-light">Lo que ofrezco</p>
        <h2>Servicios</h2>

        <div className="container services__container">
          {/* LIST: UI/UX Design */}
          <article className="service">
            <div className="services__head">
              <h3>Diseño UI/UX</h3>
            </div>

            <ServicesList
              services={[
                'Diseño de interfaces',
                'Desarrollo de maquetas',
                'Diseño de vectores',
                'Diseño de logos',
                'Diseño de banners',
              ]}
            />
          </article>

          {/* LIST: Web development */}
          <article className="service">
            <div className="services__head">
              <h3>Desarrollo WEB</h3>
            </div>

            <ServicesList
              services={[
                'Desarrollo Backend',
                'Desarrollo Frontend',
                'Gestión de dominio',
                'Desarrollo de testing',
                'Análisis QA',
                'Despliegue en servidores',
                'Posicionamiento SEO',
                'Responsive design',
                'Desarrollo de APIs',
              ]}
            />
          </article>

          {/* LIST: Computer assistant */}
          <article className="service">
            <div className="services__head">
              <h3>Consultoria</h3>
            </div>

            <ServicesList
              services={[
                'Desarrollo algoritmico',
                'Consultoría de sistemas',
                'Diseño de sistemas',
                'Clarificación de problemas',
                'Análisis de requerimientos',
                'Análisis de datos',
                'Implementación de procesos',
              ]}
            />
          </article>
        </div>
      </section>
    );
  }
}
