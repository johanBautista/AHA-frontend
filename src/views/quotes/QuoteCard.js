import React, { Component } from 'react';
import '../../index.css';
import quoteService from '../../services/quoteService';
import QuoteCards from './QuoteCards';

class QuoteCard extends Component {
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
      // console.log(error);
    }
  }

  render() {
    const { quotes } = this.state;
    return (
      <div>
        <div className="intro-text">
        <h2> If you can dream it can be done</h2>
        </div>

        {quotes.map(quote => {
          return (
            <div key={quote._id} className="style-card">
              <QuoteCards quote={quote} className="info-card" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default QuoteCard;
