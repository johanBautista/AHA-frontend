import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../Context/AuthContext';
// import quoteService from '../../services/quoteService';

class QuoteListUser extends Component {
  

  

  render() {
    const { data } = this.props;
    return (
      <div>
        {data.map(quote => {
          return (
            <div key={quote._id} className="style-card-detail">
              <p>{quote.text}</p>
              <div className="style-card-info">
                <p>{quote.date}</p>
                <p>{quote.location}</p>
                <p>{quote.theme}</p>
              </div>
              <div className="section-boton">
                <Link to={`/quotes/edit/${quote._id}`} className="btn-card">
                  EDIT
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
