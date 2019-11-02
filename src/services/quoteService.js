import axios from 'axios';

class QuoteService {
  constructor(){
    this.axios = axios.create({
      baseURL:'http://localhost:3001/api', 
      withCredentials: true 
    });
  }

  async getAllQuotes() {
    const { data: quotes } = await this.axios.get('/quotes');
    return quotes;
  }

  async getAllQuotesUser(id) {
    const { data: quotes } = await this.axios.get(`/quotes/user/${id}`);
    return quotes;
  }

  async getQuote(id) {
    const { data: quote } = await this.axios.get(`/quotes/${id}`);
    return quote;
  }

 async createQuotes(body) {
    const { data: quotes } = await this.axios.post('/quotes', body);
   return quotes;
  }

  async updateQuotes(quote) {
    const { data: quotes } = await this.axios.put(`/quotes/${quote._id}`, quote);
    return quotes;
  }

}

const quoteService = new QuoteService()

export default quoteService;