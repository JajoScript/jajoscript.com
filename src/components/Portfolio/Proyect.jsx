// Dependencias.
import React, { Component } from 'react';

// Estilos.
// Otros componentes.
// Assets.

// Definición del componente.
export default class Proyect extends Component {
  render() {
    return (
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={this.props.urlImg} alt={this.props.altImg} />
        </div>
        <h3>{this.props.title}</h3>

        <div className="portfolio__item-btns">
          <a href={this.props.urlRepository} target="_blank" className="btn">
            Repositorio
          </a>
          <a
            href={this.props.urlDemo}
            target="_blank"
            className="btn btn-primary"
            style={{ display: this.props.demoDisabled ? 'none' : '' }}
          >
            Demo
          </a>
        </div>
      </article>
    );
  }
}
