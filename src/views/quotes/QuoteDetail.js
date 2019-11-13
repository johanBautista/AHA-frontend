import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../index.css';
import quoteService from '../../services/quoteService';

class QuoteCard extends Component {
  state = {
    quote: {},
    // counter: 0,
  };

  async componentDidMount() {
    try {
      const quote = await quoteService.getQuoteDetail(this.props.match.params.id);
      this.setState({
        quote,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { quote } = this.state;

    return (
      <div className="role-img-detail">
        <div className="home-features-detail connect-login">
          <Link to={'/'}>
            <span>aha! Moment</span>
          </Link>
        </div>

        <div className="style-card-detail">
          <p>{quote.text}</p>
          <div className="style-card-info">
            <p>{quote.date}</p>
            <p>{quote.location}</p>
            <p>{quote.theme}</p>
          </div>
          <div className="section-boton">
            {/* <i>{quote.owner}</i>        pasar el nombre del creador de la cita al quotedetail de home      */}
            {/* <Link to={'/login'} className="btn-card">
              DISLIKE
            </Link> */}
            <Link to={'/login'} className="btn-card">
              LIKE
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteCard;
