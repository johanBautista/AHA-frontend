import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuoteCards extends Component {
  render() {
    const { quote } = this.props;
    return (
      <div>
        <Link to={`/quotes/${quote._id}`} className="info-card">
          <i>{quote.text}</i>
        </Link>
      </div>
    );
  }
}

export default QuoteCards;
