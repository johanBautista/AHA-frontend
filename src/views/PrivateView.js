import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';
import QuoteNew from './QuoteNew';
import QuoteListUser from './QuoteListUser';

// import Form from '../components/QuoteCreate';
// import Edit from '../components/EditUpdate';
// import Quote from './QuoteUpdate';
// import QuoteList from './QuoteList';

const PrivateView = ({ user, handleLogout }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>home</li>
          <li>editUser</li>
          <li></li>
        </ul>
      </nav>
      <h3>Vista protegida!</h3>
      <p>Bon dia: {user.username}</p>
      <button onClick={handleLogout} className="btn">
        logout 2
      </button>
      <QuoteNew />
      <QuoteListUser />
    </div>
  );
};

export default withAuth(PrivateView);
