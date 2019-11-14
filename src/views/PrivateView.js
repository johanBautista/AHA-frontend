/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';
import quoteService from '../services/quoteService';
import logo from '../img/logo.png';

import QuoteNew from './quotes/QuoteNew';
import QuoteListUser from './quotes/QuoteListUser';

class PrivateView extends Component {
  state = {
    quotes: {},
    quotesList: [],
    loading: true,
  };

  handleQuote = newquotes => {
    this.setState({ loading: true });
    const { quotes } = this.state;
    this.setState({ quotes: newquotes });
    this.actualizarQuote();
  };

  actualizarQuote = async () => {
    const quotes = await quoteService.getAllQuotesUser(this.props.user._id);
    this.setState({
      quotesList: [...quotes],
    });
  };

  async componentDidMount(actualizarQuote) {
    try {
      this.actualizarQuote();
    } catch (error) {
      // console.log(error);
    }
  }

  render() {
    const { user, handleLogout } = this.props;
    const { quotesList } = this.state;
    return (
      <div>
        <nav>
          <Link to={'/search'} className="btn-nav">
            Search
          </Link>
          <Link to={`/profile/${user._id}`} className="btn-nav">
            Profile
          </Link>
          <Link to={'/events'} className="btn-nav">
            New Event
          </Link>
          <button onClick={handleLogout} className="btn-card">
            logout2
          </button>
        </nav>
        <h3>Hi, How are you: {user.username}</h3>
        <div className="home-features">
          <img src={logo} alt="" className="role-img-home" />
          <span>aha! Moment</span>
        </div>
        <QuoteNew handleQuote={this.handleQuote} />
        <QuoteListUser data={quotesList} />
      </div>
    );
  }
}

export default withAuth(PrivateView);
