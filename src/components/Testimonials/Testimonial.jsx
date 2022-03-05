// Dependencias.
import { AiFillStar } from 'react-icons/ai';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Definición del componente.
export default class Testimonial extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getClienteData();
  }

  getClienteData = () => {
    fetch('https://randomuser.me/api/', {
      'Set-Cookie': '_ga;SameSite=Strict; Secure',
    })
      .then((res) => res.json())
      .then((client) => {
        let data = client.results[0];

        let imgSrc = data.picture.large;
        let phone = data.cell;
        let name = `${data.name.first} ${data.name.last}`;

        this.setState({
          clientImg: imgSrc,
          clientPhone: phone,
          clientName: name,
        });
      })
      .catch((e) => {
        this.setState({
          display: false,
        });
      });
  };

  render() {
    return (
      <article className="testimonial">
        <div className="client__avatar">
          <img src={this.state.clientImg} alt="Foto del cliente" />
        </div>

        <div className="client__info">
          <p className="client__name">{this.state.clientName}</p>
          <small className="client__review">{this.props.review.desc}</small>

          <div className="client__stars">
            {[...Array(this.props.review.stars)].map((e, i) => (
              <AiFillStar key={i} />
            ))}
          </div>
        </div>
      </article>
    );
  }
}

// Props types.
Testimonial.propTypes = {
  review: PropTypes.objectOf(PropTypes.any),
};

// Props defaults.
Testimonial.defaultProps = {
  review: {
    desc: 'Sin comentarios',
    stars: 1,
  },
};
