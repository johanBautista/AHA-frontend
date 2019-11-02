import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import quoteService from '../services/quoteService';

class QuoteList extends Component {
  state = {
    quotes: [],
  };

  async componentDidMount() {
    try {
      const quotes = await quoteService.getAllQuotes();
      this.setState({
        quotes,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { quotes } = this.state; // loading
    return (
      <div>
        <h3>Estamos en Quote List kbron</h3>

        {quotes.map(quote => {
          return (
            <div key={quote._id}>
              <p>{quote.text}</p>
              <p>{quote.date}</p>
              <p>{quote.location}</p>
              <p>{quote.theme}</p>
              <Link to={`/quotes/${quote._id}`}>{quote.text} </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default QuoteList;
