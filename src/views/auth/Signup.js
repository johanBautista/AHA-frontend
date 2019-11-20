/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../Context/AuthContext';

import logo2 from '../../img/logo-login.png';

class Signup extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.handleSignup({
      username,
      password,
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <div className="home-features">
          <Link to={'/'}>
            <img className="role-img-login" src={logo2} alt="uno" />
          </Link>
          <span>I have a idea...</span>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="username" />
          <br />
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="password" />
          <input type="submit" value="SIGNUP" className="connect-btn" />
        </form>
        <p>Already have account? </p>
        <div className="connect-login">
          <Link to={'/login'}>
            <b>Login</b>
          </Link>
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);

