// Dependencias.
import React, { Component } from 'react';

// Estilos.
import './Experience.css';

// Otros componentes.
import Details from './details';

// Definición del componente.
export default class Experience extends Component {
  render() {
    return (
      <section id="experience">
        <h5>Mis habilidades</h5>
        <h2>Mi experiencia</h2>

        <div className="container experience__container">
          {/* Web developer: Frontend area. */}
          <div className="experience__frontend">
            <h3>Desarrollo Frontend</h3>
            <div className="experience__content">
              <Details name="HTML" level="3" progress="90%"></Details>
              <Details name="CSS" level="2" progress="60%"></Details>
              <Details name="JavaScript" level="2" progress="75%"></Details>
              <Details name="TypeScript" level="2" progress="60%"></Details>
              <Details name="Bootstrap" level="3" progress="85%"></Details>
              <Details name="Tailwind" level="1" progress="30%"></Details>
              <Details name="React" level="2" progress="64%"></Details>
              <Details name="NextJS" level="2" progress="70%"></Details>
            </div>
          </div>

          {/* Web developer: Backend area. */}
          <div className="experience__backend">
            <h3>Desarrollo Backend</h3>
            <div className="experience__content">
              <Details name="Node JS" level="2" progress="80%"></Details>
              <Details name="Django" level="1" progress="30%"></Details>
              <Details name="MongoDB" level="2" progress="50%"></Details>
              <Details name="Python" level="3" progress="92%"></Details>
              <Details name="FastAPI" level="2" progress="80%"></Details>
              <Details name="MySQL" level="2" progress="60%"></Details>
              <Details name="Java" level="1" progress="30%"></Details>
              <Details name="Express" level="1" progress="40%"></Details>
            </div>
          </div>
          {/* MSG: Para el Javier del futuro. Aquí se podria crear otra sección para el area de diseño. */}
        </div>
      </section>
    );
  }
}
