import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';
import quoteService from '../services/quoteService';

class QuoteListUser extends Component {
  state = {
    quotes: [],
  };

  async componentDidMount() {
    try {
      // console.log(this.props.user._id);
      const quotes = await quoteService.getAllQuotesUser(this.props.user._id);
      // console.log(quotes);
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
            <div key={quote._id} className="style-card-detail">
              <p>{quote.text}</p>
              <div className="style-card-info">
                <p>{quote.date}</p>
                <p>{quote.location}</p>
                <p>{quote.theme}</p>
              </div>
              <div className="section-boton">
                <Link to={`/quotes/edit/${quote._id}`} className="btn5">
                  Edit
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuth(QuoteListUser);
