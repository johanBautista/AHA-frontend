/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { withAuth } from './Context/AuthContext';

import PrivateView from './views/PrivateView';
import Signup from './views/auth/Signup';

import Login from './views/auth/Login';
import Home from './Home';
import './index.css';

import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';

import QuoteNew from './views/QuoteNew';
import QuoteDetail from './views/QuoteDetail';
import QuoteUpdate from './views/QuoteUpdate';
import QuoteSearch from './components/search/Search';
import EditProfile from './views/EditProfile';

class App extends Component {
  render() {
    // const { handleLogout } = this.props;
    return (
      <>
        <Router>
          <AnonRoute exact path="/" component={Home} />
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/quotes/:id" component={QuoteDetail} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={PrivateView} />
          <PrivateRoute exact path="/search" component={QuoteSearch} />
          <PrivateRoute exact path="/quotes/edit/:id" component={QuoteUpdate} />
          <PrivateRoute exact path="/profile/:id" component={EditProfile} />
          <PrivateRoute exact path="/quotes/new" component={QuoteNew} />
        </Router>
      </>
    );
  }
}

export default withAuth(App);
