// Dependencias.
import React, { Component } from 'react';
import {BsLinkedin, BsGithub, BsInstagram, BsBehance} from 'react-icons/bs';

// Estilos.
// Otros componentes.
// Assets.

// Definición del componente.
export default class SocialMedia extends Component {
  render() {
    return (
      <div className='header__socials'>
        <a href='https://www.linkedin.com/in/javier-almarza-bucarey/' target='_blank'><BsLinkedin size={20}/></a>
        <a href='https://github.com/JajoScript' target='_blank'><BsGithub size={20}/></a>
        <a href='https://www.instagram.com/jajoscript/?hl=es-la' target='_blank'><BsInstagram size={20}/></a>
        <a href='https://www.behance.net/javieralmarza' target='_blank'><BsBehance size={20}/></a>
      </div>
    )
  }
}
