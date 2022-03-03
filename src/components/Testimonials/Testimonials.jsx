// Dependencias.
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { Component } from 'react';

// Estilos.
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

// Otros componentes.
import Testimonial from './Testimonial';

// Definición del componente.
export default class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [
        {
          desc: 'Le pedí una página hace 4 meses, me entrego un completo sin mayo. Increíble servicio.',
          stars: 5,
        },
        {
          desc: 'La página nunca funciono, pero buen cabro.',
          stars: 4,
        },
        {
          desc: 'Le pedí una página, quedo como el culo.',
          stars: 3,
        },
        {
          desc: 'Le pagué 2 palos, sigo esperando la página.',
          stars: 2,
        },
        {
          desc: 'Espere 2 años. Me hizo una página con WIX.',
          stars: 1,
        },
      ],
    };
  }

  getReview = () => {
    let review =
      this.state.reviews[Math.floor(Math.random() * this.state.reviews.length)];
    return review;
  };

  render() {
    return (
      <section id="testimonials">
        <h5>Reseñas de los clientes</h5>
        <h2>Testimonios</h2>

        <Swiper
          className="container testimonials__container"
          pagination={true}
          spaceBetween={40}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <Testimonial review={this.getReview()} />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial review={this.getReview()} />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial review={this.getReview()} />
          </SwiperSlide>
        </Swiper>
      </section>
    );
  }
}
