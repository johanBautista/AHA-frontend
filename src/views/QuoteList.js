import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import quoteService from '../services/quoteService';

class QuoteList extends Component {
  state = {
    quotes: [],
    // loading: true,            //  AQUI HAY Q PENSAR COMO PRESENTO LA INFO CON O SIN LOGIN
  };

  async componentDidMount() {
    try {
      const quotes = await quoteService.getAllQuotes();
      console.log(quotes);
      this.setState({
        quotes,
        // loading:false
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
        {/* {!loading && books.map((book) => {
          return ( */}
        {quotes.map(quote => { // loading && quotes.map 
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
        {/* {loading && <div>loading...</div>} */}
      </div>
    );
  }
}

export default QuoteList;
