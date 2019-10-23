import axios from 'axios';

class BookService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:3000/api',
      withCredentials: true
    });
  }

  getAllBooks() {
    return this.axios.get('/books')
      .then(({ data: books }) => books)
  }

  getBookById(id){
    return this.axios.get(`/books/${id}`)
      .then(({ data: book }) => book);
  }

  createBook(body) {
    return this.axios.post('/books', body)
      .then(({ data: book }) => book);
  }

  updateBook(book) {
    return this.axios.put(`/books/${book._id}`, book)
      .then(({ data: book }) => book);
  }

}

const bookService = new BookService()

export default bookService;