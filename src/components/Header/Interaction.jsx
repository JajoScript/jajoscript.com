// Dependencias.
import React, { Component } from 'react'

// Estilos.
// Otros componentes.
// Assets.
import CV from '../../assets/files/CV.pdf';

// Definición del componente.
export default class Interaction extends Component {
  render() {
    return (
      <div className='interact'>
        <a href={CV} className='btn' download>Descargar CV</a>
        <a href='#contact' className='btn btn-primary'>Contáctame!</a>
      </div>
    )
  }
}
