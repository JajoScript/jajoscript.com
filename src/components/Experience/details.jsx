// Dependencias.
import React, { Component } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

// Otros componentes.
// Assets.
// Definición del componente.
export default class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="experience__details">
        <BsPatchCheckFill className="experience__details-icon" />
        <div>
          <h4>{this.props.name}</h4>
          <small className="text-light">
            {this.props.level === '1' ? 'Basico' : ''}
            {this.props.level === '2' ? 'Intermedio' : ''}
            {this.props.level === '3' ? 'Experto' : ''}
          </small>

          <div className="experience__chart">
            <div
              className="experience__progressbar"
              style={{ width: this.props.progress }}
            ></div>
          </div>
        </div>
      </article>
    );
  }
}
