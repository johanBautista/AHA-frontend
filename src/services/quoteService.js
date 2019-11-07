import axios from 'axios';

class QuoteService {
  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:3001/api',
      withCredentials: true,
    });
  }

  // mostrar todas las quotes en homepage
  getAllQuotes() {
    return this.axios.get('/quotes').then(({ data: quotes }) => quotes);
  }

  // mostrar mis quotes creadas en mi userHome
  getAllQuotesUser(id) {
    return this.axios.get(`/quotes/user/${id}`).then(({ data: quotes }) => quotes);
  }

  // mostrar detalle de quote desde home
  getQuoteDetail(id) {
    return this.axios.get(`/quotes/${id}`).then(({ data: quote }) => quote);
  }

  // editar la quote desde userHome
  getQuoteById(id) {
    
    return this.axios.get(`/quotes/${id}`).then(({ data: quote }) => quote);
  }

  // crear quotes
  createQuotes(body) {
    return this.axios.post('/quotes', body).then(({ data: quotes }) => quotes);
  }

  // actualizar la quote
  async updateQuotes(quote) {
    const { data: quotes } = await this.axios.put(`/quotes/${quote._id}`, quote);
    return quotes;
  }
}

const quoteService = new QuoteService();

export default quoteService;
