import React, { Component } from 'react';
import bookService from '../../services/bookService';

import CardBook from './components/CardBook';

class BookDetail extends Component {

  state = {
    book: {},
    loading: true,
  }

  async componentDidMount() {
    const { match: {params: { id }} } = this.props;
    try {
      const book = await bookService.getBookById(id)  
      this.setState({
        book,
        loading: false,
      })
    } catch (error) {
      console.log(error);
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { book, loading } = this.state;
    console.log('render');
    return (
      <>
        {loading && <div>Loading...</div> }
        {!loading && <CardBook book={book} /> }
      </>
    );
  }
}

export default BookDetail;