import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import PrivateView from './views/PrivateView';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Home from './Home';
import { withAuth } from './Context/AuthContext';
import './index.css';

import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
// import Quote from './views/quote/Quote';

// import QuoteCard from './views/QuoteList';
import QuoteList from './views/QuoteList';
import QuoteNew from './views/QuoteNew';
import QuoteDetail from './views/QuoteDetail';
import QuoteUpdate from './views/QuoteUpdate';

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    // const { handleLogout } = this.props;
    return (
      <>
        <Router>
          <AnonRoute exact path="/" component={Home} />
          {/* <AnonRoute exact path="/quotes" component={QuoteCard} /> */}

          {/* esta en annonRoute ojo con cambio  */}
          <PrivateRoute exact path="/quotes" component={QuoteList} /> 
          <PrivateRoute exact path="/quotes/update" component={QuoteUpdate} /> 

          <PrivateRoute exact path="/quotes/new" component={QuoteNew} />
          <AnonRoute exact path="/quotes/:id" component={QuoteDetail} />  
          <AnonRoute exact path="/login" component={Login} />
          <AnonRoute exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/private" component={PrivateView} />
        </Router>
        {/* <button onClick={handleLogout} className="btn">
          logout 1
        </button> */}
      </>
    );
  }
}

export default withAuth(App);

// aqui es donde debo delimitar las rutas en anon o private .. si uso Route ???
