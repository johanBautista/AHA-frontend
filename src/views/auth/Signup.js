import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../logo2.png';

import { withAuth } from '../../Context/AuthContext';

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
          <img className="role-img-home" src={logo2} alt="uno" />
          <span>I have a idea...</span>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          {/* <label>Username:</label> */}
          <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="username" />
          <br />
          {/* <label>Password:</label> */}
          <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="password" />
          <input type="submit" value="SIGNUP" className="btn" />
        </form>

        <p>
          Already have account?
          <Link to={'/login'}>
            
            <b>Login</b>
          </Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);
