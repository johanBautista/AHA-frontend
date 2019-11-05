import React from 'react';
import { withAuth } from '../Context/AuthContext';

import QuoteNew from './QuoteNew';
import QuoteListUser from './QuoteListUser';

const PrivateView = ({ user, handleLogout }) => {
  return (
    <div>
      <nav>
        <button className="btn4">Home</button>
        <button className="btn4">Edit Profile</button>
        <button className="btn4">Create Quote</button>
        <button onClick={handleLogout} className="btn5">
          logout 2
        </button>
      </nav>
      {/* <p>Vista protegida!</p> */}
      <h3>Bon dia: {user.username}</h3>

      <QuoteNew />
      <QuoteListUser />
    </div>
  );
};

export default withAuth(PrivateView);
