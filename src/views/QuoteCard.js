import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../index.css';
import quoteService from '../services/quoteService';
import QuoteCards from './QuoteCards';

class QuoteCard extends Component {
  state = {
    quotes: [],
  };

  async componentDidMount() {
    try {
      const quotes = await quoteService.getAllQuotes();
      console.log(quotes);
      this.setState({
        quotes,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { quotes } = this.state;
    return (
      <div>
        <h3>Estamos en Quote List fdfdfdf </h3>

        {quotes.map(quote => {
          return (
            <div key={quote._id} className="style-card">
              {/* <Link to={`/quotes/${quote._id}`}>{quote.text} </Link> */}
              <QuoteCards quote={quote}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default QuoteCard;
