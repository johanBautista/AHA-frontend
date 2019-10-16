import React, { Component } from 'react';
import bookService from './services/bookService';

class App extends Component {

  state = {
    books: [],
    loading: true,
  }

  async componentDidMount() {
    try {
      const books = await bookService.getAllBooks()  
      this.setState({
        books,
        loading: false
      })
    } catch (error) {
      console.log(error);
    }
    // bookService.getAllBooks()
    //   .then((books) => {
    //     this.setState({
    //       books,
    //       loading: false
    //     })
    //   })
    //   .catch (error => {
    //     console.log(error);
    //   });
  }
  
  render() {
    console.log('render')
    const { books, loading } = this.state;
    return (
      <div className="App">
        <h1>Books</h1>
        {!loading && books.map((book) => {
          return (
            <div key={book._id}>
              {book.title}
            </div>
          )
        })}
        {loading && <div>loading...</div>}
      </div>
    );
  }
}

export default App;
