// Dependencias.
import React, { Component, useState } from 'react';
import { AiOutlineHome, AiFillStar } from 'react-icons/ai';
import { BiUserCircle, BiBrain, BiBookAlt } from 'react-icons/bi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaUserCog } from 'react-icons/fa';

// Estilos.
import './Nav.css';

// Otros componentes.

// Definición del componente.
export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { activeNav: '#' };
  }

  changeActiveNav = (e) => {
    this.setState({ activeNav: e });
  };

  render() {
    return (
      <nav className="nav__container">
        <a
          href="#"
          onClick={() => this.changeActiveNav('#')}
          className={this.state.activeNav === '#' ? 'active' : ''}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => this.changeActiveNav('#about')}
          className={this.state.activeNav === '#about' ? 'active' : ''}
        >
          <BiUserCircle />
        </a>
        <a
          href="#experience"
          onClick={() => this.changeActiveNav('#experience')}
          className={this.state.activeNav === '#experience' ? 'active' : ''}
        >
          <BiBrain />
        </a>
        <a
          href="#services"
          onClick={() => this.changeActiveNav('#services')}
          className={this.state.activeNav === '#services' ? 'active' : ''}
        >
          <BiBookAlt />
        </a>
        <a
          href="#portfolio"
          onClick={() => this.changeActiveNav('#portfolio')}
          className={this.state.activeNav === '#portfolio' ? 'active' : ''}
        >
          <RiCustomerService2Fill />
        </a>
        <a
          href="#testimonials"
          onClick={() => this.changeActiveNav('#testimonials')}
          className={this.state.activeNav === '#testimonials' ? 'active' : ''}
        >
          <AiFillStar />
        </a>
        <a
          href="#contact"
          onClick={() => this.changeActiveNav('#contact')}
          className={this.state.activeNav === '#contact' ? 'active' : ''}
        >
          <FaUserCog />
        </a>
      </nav>
    );
  }
}
