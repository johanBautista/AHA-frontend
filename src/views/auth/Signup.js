/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../Context/AuthContext';

import logo2 from '../../logo2.png';

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

// prueba de momento

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Signup extends Component {

//   state = {
//     username: "",
//     password: "",
//   };

//   handleChange = (event) => {
//     const {name, value} = event.target;
//     this.setState({[name]: value});
//   }

//   handleFormSubmit = (e) => {
//     e.preventDefault();
//     // const { username, password } = this.state;
//     // this.props.handleLogin({
//     //   username,
//     //   password,
//     // });
//   };

//   render() {
//     const { username, password } = this.state;
//     return (
//       <div>
//         <form onSubmit={this.handleFormSubmit}>
//           <label>Username:</label>
//           <input type="text" name="username" value={username} onChange={this.handleChange}/>
//           <label>Password:</label>
//           <input type="password" name="password" value={password} onChange={this.handleChange} />
//           <input type="submit" value="Signup" />
//         </form>

//         <p>Already have account?
//           <Link to={"/login"}> Login</Link>
//         </p>

//       </div>
//     )
//   }
// }

// export default Signup;
