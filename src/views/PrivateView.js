import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';
import logo from '../logo.png';

import QuoteNew from './QuoteNew';
import QuoteListUser from './QuoteListUser';


const PrivateView = ({ user, handleLogout }) => {
  return (
    <div>
      <nav>
        <Link to={'/'} className="btn4">
          Home
        </Link>
        <Link to={'/'} className="btn4">
          Edit Profile
        </Link>
        <Link to={'/'} className="btn4">
          Create Quote
        </Link>
        <Link onClick={handleLogout} className="btn5">
          Logout
        </Link>
        {/* <button className="btn4">Home</button> */}
        {/* <button className="btn4">Edit Profile</button> */}
        {/* <button className="btn4">Create Quote</button> */}
        {/* <button onClick={handleLogout} className="btn5">
          logout 2
        </button> */}
      </nav>
      {/* <p>Vista protegida!</p> */}
      <h3>Hi, How are you: {user.username}</h3>
      <div className="home-features">
          <img src={logo} alt="" className="role-img-home"/>
          <span>aha! Moment</span>
        </div>
      <QuoteNew />
      <QuoteListUser />
    </div>
  );
};

export default withAuth(PrivateView);
