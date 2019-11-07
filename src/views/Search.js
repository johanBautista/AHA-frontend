import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import quoteService from '../services/quoteService';
import logo from '../logo.png';

class QuoteList extends Component {
  state = {
    quotes: [],
    // user:''
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
    const { quotes } = this.state; // loading
    return (
      <div>
        <div className="home-features">
          <Link to={'/'}>
            <img className="role-img-home" src={logo} alt="dos" />
          </Link>
        </div>

        <div className="intro-text">
          <h2>Search Quotes </h2>
        </div>
        {quotes.map(quote => {
          return (
            <div key={quote._id} className="style-card">
              <Link to={`/quotes/${quote._id}`} className=''>{quote.text} </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default QuoteList;
