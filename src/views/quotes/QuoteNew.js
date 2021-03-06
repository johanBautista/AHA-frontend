import React, { Component } from 'react';
import quoteService from '../../services/quoteService';
import { withAuth } from '../../Context/AuthContext';
import '../../index.css';

class QuoteNew extends Component {
  state = {
    quotes: [],
    text: '',
    date: '',
    location: '',
    theme: '',
    owner: this.props.user._id,
    // loading: true,
    error: false,
  };

  // evento q se genera
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // lo q tengo q subir
  handleFormSubmit = async event => {
    event.preventDefault();
    // const { text, date, location, theme } = this.state.quotes;

    // if (text === '' || date === '' || location === '' || theme === '') {
    //   this.setState({
    //     error: true,
    //   });
    //    //detiene la ejecucion
    // } else {
      await quoteService.createQuotes(this.state);
      this.setState(
        {
          text: '',
          date: '',
          location: '',
          theme: '',
        },
        this.props.handleQuote(this.state),
      );
    // }
  };

  render() {
    return (
      <div className="create-quote">
        <p>Create Quote</p>

        <form onSubmit={this.handleFormSubmit}>
          <textarea
            type="textarea"
            rows="5"
            cols="55"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="do you have an idea?"
            className="textarea-style"
          />
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            placeholder="location"
          />

          <input type="text" name="theme" value={this.state.theme} onChange={this.handleChange} placeholder="theme" />
          <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />

          <input type="submit" value="ADD NEW" className="connect-btn" />
        </form>
      </div>
    );
  }
}

export default withAuth(QuoteNew);
