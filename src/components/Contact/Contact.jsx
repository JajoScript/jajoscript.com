// Dependencias.
import React, { Component, useRef } from 'react';
import emailjs from 'emailjs-com';

// Estilos.
import './Contact.css';

// Otros componentes.
import ContactCard from './ContactCard';

// Definición del componente.
export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lvfrv49',
        'template_7facick',
        document.getElementById('form'),
        'GkkRjuTI47nQmh7ss'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );

    e.target.reset();
  };

  render() {
    return (
      <section id="contact">
        <p className="small_text text-light">Ponte en contacto</p>
        <h2>Contactame</h2>

        <div className="container contact__container">
          <div className="contact__options">
            {/* EMAIL */}
            <ContactCard
              title="Email"
              data="JavierAlmarzaBucarey@gmail.com"
              redirect="mailto:JavierAlmarzaBucarey@gmail.com"
              text="Envíame un mensaje"
              icon="email"
              isHidden={false}
            />

            {/* INSTAGRAM */}
            <ContactCard
              title="Instagram"
              data="@JajoScript"
              redirect="https://www.instagram.com/jajoscript"
              text="Envíame un mensaje"
              icon="ig"
              isHidden={false}
            />
          </div>

          {/* Form contact */}
          <form onSubmit={this.sendEmail} id="form">
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre completo"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Ingresa tu Email"
              required
            />
            <textarea
              name="message"
              rows="8"
              placeholder="Ingresa aquí tu mensaje"
              required
            ></textarea>

            <button type="submit" className="btn btn-primary">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    );
  }
}
