import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import BookList from './views/books/BookList';
import BookDetail from './views/books/BookDetail';
import BookUpdate from './views/books/BookUpdate';

import { withTheme } from './Context/ThemeContext';

class App extends Component {

  render() {
    // const { changeTheme } = this.props;
    console.log('render App')
    return (
      <>
        {/* <button onClick={changeTheme}>change</button> */}
        <Router>
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:id" component={BookDetail} />
          <Route path="/books/:id/update" component={BookUpdate} />
        </Router>
      </>
    );
  }
}

export default App;
