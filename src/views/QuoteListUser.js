import React, { Component } from 'react';
import { withAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import quoteService from '../services/quoteService';

class QuoteListUser extends Component {
  state = {
    quotes: [],
  };

  async componentDidMount() {
    try {
      console.log(this.props.user._id)
      const quotes = await quoteService.getAllQuotesUser(this.props.user._id);
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
        {quotes.map(quote => { 
          return (
            <div key={quote._id} className="style-card">
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

export default withAuth( QuoteListUser);
