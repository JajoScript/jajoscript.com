// Dependencias.
import React, { Component } from 'react';
import { BiGitBranch } from 'react-icons/bi';
import PropTypes from 'prop-types';

// Estilos.
// Otros componentes.
// Assets.

// Definición del componente.
export default class Proyect extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getDataRepo();
  }

  getDataRepo = () => {
    fetch(
      `https://api.github.com/repos/JajoScript/${this.props.nameRepository}/contributors`
    )
      .then((response) => response.json())
      .then((data) => {
        let contributions = 0;

        data.map((item) => {
          contributions += item.contributions;
        });

        this.setState({
          contributions: contributions,
        });
      })
      .catch((e) => {
        this.setState({
          contributions: '0',
        });
      });
  };

  render() {
    return (
      <article className="portfolio__item">
        <div className="portfolio__item-img">
          <img src={this.props.urlImg} alt={this.props.altImg} />
        </div>

        <h3>{this.props.title}</h3>

        <div className="portfolio__contributions">
          <BiGitBranch title="Icono de ramas de git" />
          <p className="text-light">Aportes: {this.state.contributions}</p>
        </div>

        <div className="portfolio__item-btns">
          <a href={this.props.urlRepository} target="_blank" className="btn">
            Repositorio
          </a>
          <a
            href={this.props.urlDemo}
            target="_blank"
            className="btn btn-primary"
            style={{ display: this.props.demoDisabled ? 'none' : '' }}
          >
            Demo
          </a>
        </div>
      </article>
    );
  }
}

// PropTypes.
Proyect.propTypes = {
  title: PropTypes.string,
  urlImg: PropTypes.string,
  altImg: PropTypes.string,
  urlRepository: PropTypes.string,
  urlDemo: PropTypes.string,
  demoDisabled: PropTypes.bool,
};

// PropTypes default.
Proyect.defaultProps = {
  title: '...',
  urlImg: '#',
  altImg: '#',
  urlRepository: '#',
  urlDemo: '#',
  demoDisabled: false,
};
