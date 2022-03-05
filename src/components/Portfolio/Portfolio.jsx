// Dependencias.
import React, { Component } from 'react';

// Estilos.
import './Portfolio.css';

// Otros componentes.
import Proyect from './Proyect';

// Definición del componente.
export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <p className="small_text text-light">Mi trabajo reciente</p>
        <h2>Portafolio</h2>

        <div className="container portfolio__container">
          <Proyect
            title="Discord Bot"
            urlImg="https://repository-images.githubusercontent.com/373730624/8a7649ce-8159-41e0-9175-dbe9135ec7d7"
            altImg="Discord-bot repositorio"
            urlRepository="https://github.com/JajoScript/Waton-BOT"
            nameRepository="Waton-BOT"
            urlDemo="#demo"
            demoDisabled={true}
          />

          <Proyect
            title="Reversi Game"
            urlImg="https://repository-images.githubusercontent.com/397980297/6696fded-6be9-40aa-9791-1c79e1768089"
            altImg="Reversi-game repositorio"
            urlRepository="https://github.com/JajoScript/IA-Reversi"
            nameRepository="IA-Reversi"
            urlDemo="#demo"
            demoDisabled={true}
          />
        </div>
      </section>
    );
  }
}
