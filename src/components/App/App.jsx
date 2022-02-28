// Dependencias.
import React, { Component } from 'react';

// Estilos.
// Importación de componentes.
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

// Definición de componente.
export default class App extends Component {
   render() {
      return (
         <div className="">
            <Banner></Banner>
            <Header></Header>
            <Nav></Nav>
            <About></About>
            <Experience></Experience>
            <Services></Services>
            <Portfolio></Portfolio>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
         </div>
      );
   }
}
