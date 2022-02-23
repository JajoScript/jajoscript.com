// Dependencias.
import React, { Component } from 'react';

// Assets.
import StarIcon from '../../assets/icons/star-solid.svg';

// Definición del componente.
export default class Comment extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   componentDidMount() {
      this.getData();
   }

   getData = () => {
      console.log('Consiguiendo datos de la api...');
      const API = 'https://randomuser.me/api/';

      fetch(API)
         .then((response) => response.json())
         .then((result) => {
            console.log(result.results[0]);

            this.setState({
               data: result.results[0],
               name: `${result.results[0].name.first} ${result.results[0].name.last}`,
               gender: result.results[0].gender,
               srcimg: result.results[0].picture.large,
            });
         });
   };

   render() {
      return (
         // random int
         <div className="p-2 h-auto flex flex-row flex-nowrap rounded-md border-emerald-800 border-2 mx-2 gap-5 hover:bg-emerald-700 hover:border-emerald-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <img
               className="border-dashed rounded-full border-2 border-emerald-800 w-auto h-auto"
               src={this.state.srcimg}
               alt={`${this.state.name} photo`}
            />
            <div className="flex flex-col justify-center gap-2">
               <h1 className="text-white text-lg font-bold">
                  @{this.state.name}
               </h1>
               <p className="text-white text-sm font-light italic">
                  "{this.props.comment}"
               </p>

               <div className="flex flex-row pt-1">
                  {[...Array(this.props.stars)].map((e, i) => (
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 stroke-amber-400 hover:fill-amber-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        key={i}
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                     </svg>
                  ))}
               </div>
            </div>
         </div>
      );
   }
}

//  {this.props.gender} => hacer algo con esto, color del fondo.
