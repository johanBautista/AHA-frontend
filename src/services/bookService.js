import axios from 'axios';

class BookService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:3000/api',  
    });
  }

  getAllBooks() {
    return this.axios.get('/books')
      .then(({ data: books }) => books);
      // .catch((error) => {
      //   console.log(error);
      // })
  }

  createBook(body) {
    return this.axios.post('/books', body)
      .then(({ data: book }) => book);
  }

}

const bookService = new BookService()

export default bookService;