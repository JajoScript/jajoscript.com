// Dependencias.
import React, { Component } from 'react'

// Estilos.
import './Header.css'

// Otros componentes.
import Interaction from './Interaction';
import SocialMedia from './SocialMedia';

// Assets.
import Photo from '../../assets/images/jajoscript-photo.png';

// Definición del componente.
export default class Header extends Component {
  render() {
    return (
      <header className='container header__container'>
        <h5 className=''>Hola! soy</h5>  
        <h1 className=''>Javier Almarza</h1>
        <h5 className='text-light'>Fullstack developer</h5> 
        
        { /* Button */}
        <Interaction></Interaction>

        { /* Icon social media */}
        <SocialMedia />

        <div className='me'>
          <img src={Photo} alt="jajoscript photo"/>
        </div>

        <a href='#contact' className='scroll__down'>
          <h4>Ir al contacto!</h4>
        </a>
      </header>
    )
  }
}
