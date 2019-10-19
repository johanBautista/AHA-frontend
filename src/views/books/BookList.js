import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bookService from '../../services/bookService';

class BookList extends Component {
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
  }
  
  render() {
    const { books, loading } = this.state;
    return (
      <div className="App">
        <h1>Books</h1>
        {!loading && books.map((book) => {
          return (
            <div key={book._id}>
              <Link to={`/books/${book._id}`}>{book.title}</Link>
            </div>
          )
        })}
        {loading && <div>loading...</div>}
      </div>
    );
  }
}

export default BookList;