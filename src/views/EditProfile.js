import React, { Component } from 'react';
import '../index.css';
import { withAuth } from '../Context/AuthContext';

// import quoteService from '../services/quoteService';

class QuoteEdit extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <div>
        <h2>Edit profile</h2>
        <form className="form-style" onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.password}
            onChange={this.handleChange}
            placeholder="password"
          />

          <div className="upload">
            <div className="img-upload"></div>
            <div className="img-choose">
              <input type="file" name="image" id="inputGroupeFile" className="img-btn" />
              <button className="img-btn">Go!</button>
            </div>
          </div>

          <input type="submit" value="Update" className="connect-btn" />
        </form>
      </div>
    );
  }
}

export default withAuth(QuoteEdit);
