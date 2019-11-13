import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';
import logo from '../img/logo.png';

import QuoteNew from './quotes/QuoteNew';
import QuoteListUser from './quotes/QuoteListUser';

class PrivateView extends Component {
  state = {
    quotes: {},
    loading: true,
  };

  handleQuote = newquotes => {
    this.setState({ loading: true });
    const { quotes } = this.state;
    this.setState({ quotes: newquotes });
    // console.log(this.state.quotes);
    // this.setState({ loading: false });
  };

  render() {
    const { user, handleLogout } = this.props;
    // const { loading } = this.state;
    // console.log('PROPS PRIVATE VIEW: ', this.props);
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
        {/* <p>Vista protegida!</p> */}
        <h3>Hi, How are you: {user.username}</h3>
        <div className="home-features">
          <img src={logo} alt="" className="role-img-home" />
          <span>aha! Moment</span>
        </div>
        <QuoteNew handleQuote={this.handleQuote} />
        <QuoteListUser newquotes={this.state.quotes} />

        {/* {!loading && <QuoteListUser newquotes={this.state.quotes} />}
        {loading && <div>Loading ...</div>} */}
      </div>
    );
  }
}

export default withAuth(PrivateView);
