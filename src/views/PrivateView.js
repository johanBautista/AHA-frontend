import React from 'react';
import { withAuth } from '../Context/AuthContext';
import Form from '../components/QuoteCreate';
import Edit from '../components/EditUpdate';

const PrivateView = ({ user }) => {
  return (
    <div>
      <h3>Vista protegida!</h3>
      <p>Bon dia: {user.username}</p>
      <Form />
      <Edit />
    </div>
  );
};

export default withAuth(PrivateView);
