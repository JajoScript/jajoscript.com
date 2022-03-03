import React, { Component } from 'react';
import { BsCheckLg } from 'react-icons/bs';

export default class ServicesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="services__list">
        {this.props.services.map((value, index) => (
          <li key={`e-${index}`}>
            <BsCheckLg className="service__list-icon" />
            <p>{value}.</p>
          </li>
        ))}
      </ul>
    );
  }
}
