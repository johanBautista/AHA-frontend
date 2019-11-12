// import React from 'react';
// import { Link } from 'react-router-dom';
// import { withAuth } from '../Context/AuthContext';
// import logo from '../img/logo.png';

// import QuoteNew from './QuoteNew';
// import QuoteListUser from './QuoteListUser';

// // 1. crear clase con su estado, pasar el componente QuoteNew a private y buscar la forma de que cuando se ree una quote se repinte toda la vista
// // 2. la forma de comunicar los dos hermanos sea por medio del padre, en esta caso por medio del contexto

// const PrivateView = ({ user, handleLogout }) => {
//   // console.log('PROPS PRIVATE VIEW: ', this.props);
//   return (
//     <div>
//       <nav>
//         <Link to={'/search'} className="btn-nav">
//           Search
//         </Link>
//         <Link to={`/profile/${user._id}`} className="btn-nav">
//           Profile
//         </Link>
//         <Link to={'/event'} className="btn-nav">
//           New Event
//         </Link>
//         <button onClick={handleLogout} className="btn-card">
//           logout2
//         </button>
//       </nav>
//       {/* <p>Vista protegida!</p> */}
//       <h3>Hi, How are you: {user.username}</h3>
//       <div className="home-features">
//         <img src={logo} alt="" className="role-img-home" />
//         <span>aha! Moment</span>
//       </div>
//       <QuoteNew />
//       <QuoteListUser />
//     </div>
//   );
// };

// export default withAuth(PrivateView);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import quoteService from '../services/quoteService';
import { withAuth } from '../Context/AuthContext';
import logo from '../img/logo.png';

// import QuoteNew from './QuoteNew';
import QuoteListUser from './QuoteListUser';

class PrivateView extends Component {
  state = {
    quotes: [],
    user: '',
    text: '',
    date: '',
    location: '',
    theme: '',
    owner: this.props.user._id,
    // loading: true,
  };

  // evento q se genera
  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // lo q tengo q subir
  handleFormSubmit = event => {
    event.preventDefault();
    quoteService.createQuotes(this.state);
    this.setState({
      text: '',
      date: '',
      location: '',
      theme: '',
      owner: '',
    });
  };

  render() {
    const { user, handleLogout } = this.props;
    // console.log('estamos aqui', this.props.user._id);

    return (
      <div>
        <nav>
          <Link to={'/search'} className="btn-nav">
            Search
          </Link>
          <Link to={`/profile/${user._id}`} className="btn-nav">
            Profile
          </Link>
          <Link to={'/event'} className="btn-nav">
            New Event
          </Link>
          <button onClick={handleLogout} className="btn-card">
            logout2
          </button>
        </nav>
        <p>Vista protegida!</p>
        <h3>Hi, How are you: {user.username}</h3>
        <div className="home-features">
          <img src={logo} alt="" className="role-img-home" />
          <span>aha! Moment</span>
        </div>
        {/* <QuoteNew /> */}

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

        <QuoteListUser />
      </div>
    );
  }
}

export default withAuth(PrivateView);
