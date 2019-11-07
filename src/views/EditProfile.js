import React, { Component } from 'react';

class QuoteEdit extends Component {
  state = {
    username: '',
    password: '',
  };
  
  async componentDidMount() {}

  handleChange = e => {}

  handleFormSubmit = e => {}

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h2>Edit profile</h2>
        <form className="form-style" onSubmit={this.handleFormSubmit}>
          {/* <label>Username mother:</label> */}
          <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="username" />
          {/* <label>Password:</label> */}
          <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="password" />
          <input type="submit" value="Update" className="connect-btn" />
        </form>
      </div>
    );
  }
}

export default QuoteEdit;