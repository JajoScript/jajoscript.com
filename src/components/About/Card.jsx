// Dependencias.
import React, { Component } from 'react';
import { FaAward, FaUserTie, FaFolder } from 'react-icons/fa';

// Estilos.
import './Card.css';

// Otros componentes.
// Assets.

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="about__card">
        {this.props.icon === 'award' ? (
          <FaAward className="about__icon" title="Icono de logro" />
        ) : (
          ''
        )}
        {this.props.icon === 'client' ? (
          <FaUserTie className="about__icon" title="Icono de usuario" />
        ) : (
          ''
        )}
        {this.props.icon === 'projects' ? (
          <FaFolder className="about__icon" title="Icono de carpeta" />
        ) : (
          ''
        )}
        <h5>{this.props.title}</h5>
        <small>{this.props.subtitle}</small>
      </article>
    );
  }
}
