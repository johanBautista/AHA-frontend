import React, { Component } from 'react';
import { withAuth } from '../../Context/AuthContext';

class Quote extends Component {
  state = {
    text: '',
    date: '',
    location: '',
    theme: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // handleFormSubmit = e => {
  //   e.preventDefault();
  //   const { text, date, location, theme } = this.state;
  //   this.props.handleLogin({
  //     text,
  //     date,
  //     location,
  //     theme,
  //   });
  // };

  render() {
    const { text, date, location, theme } = this.setState;

    return (
      <div>
        <h2>formulario quote</h2>
        <form className="Form" onSubmit={this.handleFormSubmit}>
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

          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    );
  }
}

export default withAuth(Quote);
