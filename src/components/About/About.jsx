// Dependencias.
import React, { Component } from 'react';
import { FaAward } from 'react-icons/fa';

// Estilos.
import './About.css';

// Otros componentes.
import Card from './Card';

// Assets.
import Me from '../../assets/images/jajoscript-photo-2.png';

// Definición del componente.
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Introducción</h5>
        <h2>Acerca de mi</h2>

        <div className="container about__container">
          <div className="about__me">
            <img className="about__me-img" src={Me} alt="About photo" />
          </div>

          <div className="about__content">
            <div className="about__cards">
              <Card
                icon="award"
                title="Experiencia"
                subtitle="+6 Meses trabajando."
              />
              <Card
                icon="projects"
                title="Repositorios"
                subtitle="+90 repositorios."
              />
            </div>

            <p>
              Mi nombre es Javier Almarza, actualmente vivo en Chile y tengo 21
              años. Comencé a programar cuando tenía 14 años y desde ese
              entonces no he parado de aprender acerca del mundo de la
              informática. Actualmente, estoy en mi cuarto año estudiando la
              carrera de Ingeniería civil en Informática.
            </p>

            <a href="#contact" className="btn btn-primary">
              Hablemos!
            </a>
          </div>
        </div>
      </section>
    );
  }
}
