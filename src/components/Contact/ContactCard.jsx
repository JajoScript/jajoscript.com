// Dependencias.
import React, { Component } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';

// Estilos.
// Otros componentes.

// Definición del componente.
export default class ContactCard extends Component {
  getSelection = (icon_name) => {
    if (icon_name == 'email') {
      return (
        <AiOutlineMail
          className="contact__option-icon"
          title="Icono de correo"
        />
      );
    } else if (icon_name == 'wsp') {
      return (
        <BsWhatsapp
          className="contact__option-icon"
          title="Icono de WhatsApp"
        />
      );
    } else if (icon_name == 'ig') {
      return (
        <BsInstagram
          className="contact__option-icon"
          title="Icono de Instagram"
        />
      );
    }
  };

  render() {
    return (
      <article
        className="contact__option"
        hidden={this.props.isHidden}
        style={{ display: this.props.isHidden ? 'none' : 'block' }}
      >
        {this.getSelection(this.props.icon)}

        <h4>{this.props.title}</h4>
        <h5 className="text-light">{this.props.data}</h5>

        <a href={this.props.redirect} target="_blank">
          {this.props.text}
        </a>
      </article>
    );
  }
}
