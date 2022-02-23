// Dependencias.
import React, { Component } from 'react';
// Importación de componentes.
import Comment from '../Comment/Comment';

// Definición de componente.
export default class Comments extends Component {
   constructor(props) {
      super(props);
      this.state = {
         comentarios: [
            'Espere 2 años. Me hizo una página con WIX.',
            'Buena la página que me hizo, gracias.',
            'La página nunca funciono, pero buen cabro.',
            'Le pedí una página, quedo como el culo.',
            'Le pagué 2 palos, sigo esperando la página.',
         ],
      };
   }

   getStars = () => {
      let stars = Math.floor(Math.random() * 5) + 1;

      return stars;
   };

   getComment = () => {
      // Elemento al azar del arreglo.
      let id = Math.floor(Math.random() * this.state.comentarios.length);

      return this.state.comentarios[id];
   };

   // Renderizado.
   render() {
      return (
         <div className="flex flex-col items-start pt-5 2xl:pl-20">
            <h1 className="text-2xl font-bold text-emerald-500">
               Ultimas reseñas
            </h1>
            <div className="flex xl:flex-row 2xl:flex-row justify-center items-center gap-3 pt-5 flex-col flex-nowrap self-stretch">
               <Comment comment={this.getComment()} stars={this.getStars()} />
               <Comment comment={this.getComment()} stars={this.getStars()} />
               <Comment comment={this.getComment()} stars={this.getStars()} />
            </div>
         </div>
      );
   }
}
