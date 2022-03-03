// Dependencias.
import React, { Component } from 'react';
import { BsLinkedin, BsGithub, BsInstagram, BsBehance } from 'react-icons/bs';
import { HiFingerPrint } from 'react-icons/hi';

// Estilos.
import './Footer.css';

// Otros componentes.

// Definición del componente.
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="#" className="footer__logo">
          <HiFingerPrint /> Jajoscript
        </a>

        <ul className="permalinks">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#experience">Experiencia</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#portfolio">Portafolio</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/javier-almarza-bucarey/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/JajoScript" target="_blank">
            <BsGithub />
          </a>
          <a href="https://www.instagram.com/jajoscript/" target="_blank">
            <BsInstagram />
          </a>
          <a href="https://www.behance.net/javieralmarza" target="_blank">
            <BsBehance />
          </a>
        </div>

        <div className="footer__copyright">
          <small>
            &copy; Javier Almarza 2022. Todos los derechos reservados.
          </small>
        </div>
      </footer>
    );
  }
}
