import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';
import QuoteNew from './QuoteNew';
import QuoteListUser from './QuoteListUser';

// import Form from '../components/QuoteCreate';
// import Edit from '../components/EditUpdate';
// import Quote from './QuoteUpdate';
// import QuoteList from './QuoteList';

const PrivateView = ({ user }) => {
  return (
    <div>
      <h3>Vista protegida!</h3>
      <p>Bon dia: {user.username}</p>
      <QuoteNew />
      <QuoteListUser /> 
    </div>
  );
};

export default withAuth(PrivateView);
