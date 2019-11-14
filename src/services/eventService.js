import axios from 'axios';

class EventService {
  constructor() {
    this.axios = axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_BASE_URL}/api`,
      withCredentials: true,
    });
  }

  // crear evento
}

const eventService = new EventService();

export default eventService;
