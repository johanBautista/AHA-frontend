import React, { Component } from 'react';
import { withAuth } from '../Context/AuthContext';
import quoteService from '../services/quoteService';

class QuoteUpdate extends Component {
  state = {
    quote: [],
  };

  async componentDidMount() {
    // const { id }  = this.props;
    try {
      const quote = await quoteService.getQuotesById();
      this.setState({
        quote,
        loading: false,
      });
    } catch (error) {
      // console.log(error);
      this.setState({ loading: false });
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

  handleSubmit = e => {
    e.preventDefault();
    const { quote } = this.state;
    const {
      history: { push },
    } = this.props;
    console.log(quote);
    quoteService
      .updatequote(quote)
      .then(() => {
        this.setState({
          message: 'quote updated',
        });
        push(`/quotes/${quote._id}`);
      })
      .catch(() => {});
  };

  render() {
    const { text, date, location, theme } = this.setState;
    // const { quote: { text, date, location, theme  }} = this.state;

    return (
      <div>
        <h2>Editar Quote</h2>
        <form onSubmit={this.handleFormSubmit} className="Form">
          <label>Text:</label>
          <br />
          <input type="text" name="text" value={text} onChange={this.handleChange} placeholder="text" />
          <br />

          <label>Date:</label>
          <br />
          <input type="date" name="date" value={date} onChange={this.handleChange} placeholder="date" />
          <br />

          <label>Location:</label>
          <br />
          <input type="text" name="location" value={location} onChange={this.handleChange} placeholder="location" />
          <br />

          <label>Theme:</label>
          <br />
          <input type="text" name="theme" value={theme} onChange={this.handleChange} placeholder="theme" />
          <br />

          <input type="submit" value="update" className="btn" />
          {/* <button className="btn">DELETE</button>  */}
        </form>
      </div>
    );
  }
}

export default withAuth(QuoteUpdate);
