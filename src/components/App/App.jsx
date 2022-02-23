// Dependencias.
import React, { Component } from 'react';

// Importación de componentes.
import Banner from '../Banner/Banner';
import Comments from '../Comments/Comments';

// Definición de componente.
export default class App extends Component {
   render() {
      return (
         <div className="bg-gray-800 h-screen w-screen">
            <Banner />
            <Comments />
         </div>
      );
   }
}
