import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';
import logo from '../logo.png';

import QuoteNew from './QuoteNew';
import QuoteListUser from './QuoteListUser';

const PrivateView = ({ user, handleLogout }) => {
  // console.log('PROPS PRIVATE VIEW: ', this.props);
  return (
    <div>
      <nav>
        <Link to={'/search'} className="btn4">
          Search
        </Link>
        <Link to={'/'} className="btn4">
          Edit Profile
        </Link>
        <Link to={'/'} className="btn4">
          Create Event
        </Link>
        <button onClick={handleLogout} className="btn5">
          logout2
        </button>
      </nav>
      {/* <p>Vista protegida!</p> */}
      <h3>Hi, How are you: {user.username}</h3>
      <div className="home-features">
        <img src={logo} alt="" className="role-img-home" />
        <span>aha! Moment</span>
      </div>
      <QuoteNew />
      <QuoteListUser />
    </div>
  );
};

export default withAuth(PrivateView);
