import React, { Component } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default class ServicesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="services__list">
        {this.props.services.map((value, index) => (
          <li key={`e-${index}`}>
            <BsCheckLg className="service__list-icon" title="Icono de ticket" />
            <p>{value}.</p>
          </li>
        ))}
      </ul>
    );
  }
}

// PropTypes.
ServicesList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string),
};

// PropTypes default.
ServicesList.defaultProps = {
  services: ['...'],
};
