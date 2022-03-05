// Dependencias.
import React, { Component } from 'react';

// Estilos.
import './Header.css';

// Otros componentes.
import Interaction from './Interaction';
import SocialMedia from './SocialMedia';

// Assets.
import Photo from '../../assets/images/jajoscript-photo.png';

// Definición del componente.
export default class Header extends Component {
  render() {
    return (
      <header className="container header__container">
        <p className="">Hola! soy</p>
        <h1 className="">Javier Almarza</h1>
        <p className="text-light">Fullstack developer</p>

        {/* Button */}
        <Interaction></Interaction>

        {/* Icon social media */}
        <SocialMedia />

        <div className="me">
          <img src={Photo} alt="jajoscript photo" />
        </div>

        <a href="#contact" className="scroll__down">
          <p>Ir al contacto!</p>
        </a>
      </header>
    );
  }
}
