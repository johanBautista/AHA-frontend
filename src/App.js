import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import BookList from './views/books/BookList';
import BookDetail from './views/books/BookDetail';
import BookUpdate from './views/books/BookUpdate';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import { withAuth } from './Context/AuthContext';

import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';

class App extends Component {
  render() {
    const { handleLogout } = this.props;
    return (
      <>
          <button onClick={handleLogout}>logout</button>
          <Router>
            <AnonRoute exact path="/login" component={Login} />
            <AnonRoute exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/books" component={BookList} />
            <PrivateRoute exact path="/books/:id" component={BookDetail} />
            <PrivateRoute path="/books/:id/update" component={BookUpdate} />
          </Router>
      </>
    );
  }
}

export default withAuth(App);
