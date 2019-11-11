import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';
import logo from '../img/logo.png';

import QuoteNew from './QuoteNew';
import QuoteListUser from './QuoteListUser';

// 1. crear clase con su estado, pasar el componente QuoteNew a private y buscar la forma de que cuando se ree una quote se repinte toda la vista
// 2. la forma de comunicar los dos hermanos sea por medio del padre, en esta caso por medio del contexto

const PrivateView = ({ user, handleLogout }) => {
  // console.log('PROPS PRIVATE VIEW: ', this.props);
  return (
    <div>
      <nav>
        <Link to={'/search'} className="btn-nav">
          Search
        </Link>
        <Link to={`/profile/${user._id}`} className="btn-nav">
          Edit Profile
        </Link>
        <Link to={'/event'} className="btn-nav">
          Create Event
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
      <QuoteNew />
      <QuoteListUser />
    </div>
  );
};

export default withAuth(PrivateView);
