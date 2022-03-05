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
        <p className="small_text text-light">Mis habilidades</p>
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

          {/* Design area */}
          <div className="experience__design">
            <h3>Diseño</h3>
            <div className="experience__content">
              <Details name="Adobe XD" level="3" progress="96%"></Details>
              <Details
                name="Adobe Photoshop"
                level="2"
                progress="54%"
              ></Details>
              <Details
                name="Adobe Illustrator"
                level="2"
                progress="40%"
              ></Details>
              <Details
                name="Adobe After Effects"
                level="1"
                progress="20%"
              ></Details>
              <Details name="Figma" level="3" progress="97%"></Details>
            </div>
          </div>
          {/* Another tecs */}
          <div className="experience__tecs">
            <h3>Otros conocimientos</h3>
            <div className="experience__content">
              <Details name="Git" level="3" progress="86%"></Details>
              <Details name="C" level="2" progress="60%"></Details>
              <Details name="SQL" level="2" progress="70%"></Details>
              <Details name="Postman" level="2" progress="40%"></Details>
              <Details name="Insomnia" level="2" progress="46%"></Details>
              <Details name="Babel" level="2" progress="56%"></Details>
              <Details name="Webpack" level="2" progress="64%"></Details>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
