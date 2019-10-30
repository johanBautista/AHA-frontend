import React from 'react';
// import { Link } from 'react-router-dom';
import { withAuth } from './Context/AuthContext';

const Navbar = () => {
  return (
    <nav className="nav-style">
      <a href="/login">login</a>
      <br />
      <a href="/signup">signup</a>
    </nav>
  );
};

export default withAuth(Navbar);
