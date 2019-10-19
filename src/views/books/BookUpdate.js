import React, { Component } from 'react';
import bookService from '../../services/bookService';

class BookUpdate extends Component {
  state = {
    book: {},
    loading: true,
    message: undefined
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

  handleChange = (e) => {
    const { book } = this.state;
    this.setState({
      book: {
        ...book,
        [e.target.name]: e.target.value,
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { book } = this.state;
    const { history: { push }} = this.props;
    console.log(book);
    bookService.updateBook(book)
      .then(() => {
        // this.setState({
        //   message: 'book updated',
        // })
        push(`/books/${book._id}`)
      })
      .catch(() => {})
  }
  
  render() {
    const { book: { title, author, description, rating }, loading, message } = this.state;

    return (
      <div>
        BookUpdate
        {message && <div>{message}</div> }
        {loading && <div>Loading...</div> }
        {!loading && (
          <>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">title</label>
            <input type="text" name="title" id="title" value={title} onChange={this.handleChange}/>
            <label htmlFor="author">author</label>
            <input type="text" name="author" id="author" value={author} onChange={this.handleChange}/>
            <label htmlFor="description">description</label>
            <input type="text" name="description" id="description" value={description} onChange={this.handleChange}/>
            <label htmlFor="rating">rating</label>
            <input type="number" name="rating" id="rating" value={rating} onChange={this.handleChange}/>
            <input type="submit" value="submit"/>
          </form>
          </>
        ) }
      </div>
    );
  }
}

export default BookUpdate;