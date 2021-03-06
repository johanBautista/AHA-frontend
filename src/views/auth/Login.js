import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../Context/AuthContext';
import logo2 from '../../img/logo-login.png';

// import '../../index.css';

class Login extends Component {
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
    this.props.handleLogin({
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
        <form className="form-style" onSubmit={this.handleFormSubmit}>
          {/* <label>Username mother:</label> */}
          <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="username" />
          <br />
          {/* <label>Password:</label> */}
          <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="password" />
          <input type="submit" value="LOGIN" className="connect-btn" />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
