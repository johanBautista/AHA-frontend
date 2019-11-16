/* eslint-disable no-undef */
import React, { Component } from 'react';
// import { withAuth } from '../Context/AuthContext';
import quoteService from '../../services/quoteService';

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
    try {
      const quote = await quoteService.getQuoteById(id);
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
    const { _id } = this.state.quote;
    quoteService
      .getQuoteDelete(_id)
      .then(() => {
        this.setState({ message: 'quote deelted' });
      })
      .catch(() => {});
  };

  render() {
    const {
      quote: { text, date, location, theme },
    } = this.state;

    return (
      <div>
        <h2>Edit Quote</h2>
        <form onSubmit={this.handleFormSubmit} className="Form">
          <label>Text:</label>
          <textarea
            type="textarea"
            rows="5"
            cols="55"
            name="text"
            value={text}
            onChange={this.handleChange}
            placeholder="text"
            className="textarea-style"
          />

          <label>Date:</label>
          <input type="text" name="date" value={date} onChange={this.handleChange} placeholder="date" />

          <label>Location:</label>
          <input type="text" name="location" value={location} onChange={this.handleChange} placeholder="location" />

          <label>Theme:</label>
          <input type="text" name="theme" value={theme} onChange={this.handleChange} placeholder="theme" />

          <input type="submit" value="UPDATE" className="connect-btn" />
          <input type="submit" value="DEL" onClick={e => this.deleteQuote(e)} className="connect-btn" />
        </form>
      </div>
    );
  }
}

export default QuoteUpdate;
