import axios from 'axios';

class EventService {
  constructor() {
    this.axios = axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_BASE_URL}/`,
      withCredentials: true,
    });
  }

  // crear evento
  createEvent(body) {
    return this.axios.post('/events', body).then(({ data: events }) => events);
  }

  // mostrar eventos creados
  getAllEventUser(_id) {    
    return this.axios.get(`/events/user/${_id}`).then(({ data: events }) => events);
  }

  // mostrar todos los eventos creados
  getAllEvents() {
    return this.axios.get('/events').then(({ data: events }) => events);
  }

  // borrar evento
  deleteEvent(id) {
    return this.axios.delete(`/events/${id}`).then(({ data: events }) => events);
  }
}

const eventService = new EventService();

export default eventService;
