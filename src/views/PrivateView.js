import React from 'react';
import { withAuth } from '../Context/AuthContext';
import Form from '../components/QuoteCreate';

const PrivateView = ({ user }) => {
  return (
    <div>
      PrivateView user: {user.username}
      <Form />
    </div>
  );
};

export default withAuth(PrivateView);
