// Dependencias.
import React, { Component } from 'react';
import {FaHammer} from 'react-icons/fa';

// Estilos.
import './Banner.css'

// Otros componentes.

// Definición del componente.
export default class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <h5 className='text-white'>Sitio en desarrollo</h5>
        <FaHammer className='animate-work'/>
      </div>
    )
  }
}
