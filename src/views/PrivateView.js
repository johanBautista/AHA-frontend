import React from 'react';
import {withAuth} from '../Context/AuthContext';
import Form from '../components/QuoteUpdate'

const PrivateView = ({ user }) => {
  
  return (
    <div>
      <Form />
      PrivateView
      user: {user.username}
    </div>
  );
};

export default withAuth(PrivateView);