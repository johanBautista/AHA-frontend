import React, { Component } from 'react';
import '../index.css';
import quoteService from '../services/quoteService';

class QuoteCard extends Component {
  state = {
    quote: {},
  };

  async componentDidMount() {
    try {
      const quote = await quoteService.getQuote(this.props.match.params.id);
      this.setState({
        quote
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { quote } = this.state;
    return (
      <div>
        <h3>Estamos en Quote Detail </h3>
          <p>{quote.text}</p>
          <div className="style-card-info">
            <p>{quote.date}</p>
            <p>{quote.location}</p>
            <p>{quote.theme}</p>
          </div>

          <button className="btn">Me Gusta</button>
        </div>
        
      
    );
  }
}

export default QuoteCard;
