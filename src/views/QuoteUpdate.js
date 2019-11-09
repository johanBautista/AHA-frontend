/* eslint-disable no-undef */
import React, { Component } from 'react';
// import { withAuth } from '../Context/AuthContext';
import quoteService from '../services/quoteService';

class QuoteUpdate extends Component {
  state = {
    quote: {
      text: '',
      date: '',
      location: '',
      theme: '',
    },
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    // console.log('id', id);
    try {
      const quote = await quoteService.getQuoteById(id);
      // console.log('hola', quote);
      this.setState({
        quote,
      });
    } catch (error) {
      // console.log(error);
    }
  }

  handleChange = e => {
    const { quote } = this.state;
    this.setState({
      quote: {
        ...quote,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { quote } = this.state;
    const {
      history: { push },
    } = this.props;
    // console.log(quote);
    quoteService
      .updateQuotes(quote)
      .then(() => {
        this.setState({
          message: 'quote updated',
        });
        push(`/quotes/${quote._id}`);
      })
      .catch(() => {});
  };

  deleteQuote = e => {
    // alert('has hecho delete');
    // e.preventDefault();
    const { id } = this.state;
    quoteService
      .getQuoteDelete(id)
      .then(() => {
        console.log('esto no borra');

        this.setState({ message: 'quote deelted' });
      })
      .catch(() => {});
  };

  render() {
    // const { text, date, location, theme } = this.state.quote;
    // console.log(this.state.quote);
    const {
      quote: { text, date, location, theme },
    } = this.state;

    return (
      <div>
        <h2>Edit Quote</h2>
        <form onSubmit={this.handleFormSubmit} className="Form">
          <label>Text:</label>
          <input type="text" name="text" value={text} onChange={this.handleChange} placeholder="text" />

          <label>Date:</label>
          <input type="text" name="date" value={date} onChange={this.handleChange} placeholder="date" />

          <label>Location:</label>
          <input type="text" name="location" value={location} onChange={this.handleChange} placeholder="location" />

          <label>Theme:</label>
          <input type="text" name="theme" value={theme} onChange={this.handleChange} placeholder="theme" />

          <input type="submit" value="UPDATE" className="connect-btn" />
        </form>
        <button onClick={e => this.deleteQuote(e)} className="connect-btn">
          DELETE
        </button>
      </div>
    );
  }
}

export default QuoteUpdate;
