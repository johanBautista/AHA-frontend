import React, { Component } from 'react';
import quoteService from '../services/quoteService';
import { withAuth } from '../Context/AuthContext';

class QuoteNew extends Component {
  state = {
    quotes: [],
    text: '',
    date: '',
    location: '',
    theme: '',
    owner:this.props.user._id
    // loading: true,
  };

  // evento q se genera
  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // lo q tengo q subir
  handleFormSubmit = event => {
    event.preventDefault();
    quoteService.createQuotes(this.state);
    this.setState({
      text: '',
      date: '',
      location: '',
      theme: '',
      owner:'',
    });
  };

  render() {
    return (
      <div>
        <h3>Estamos en Quote new</h3>

        <form className="Form" onSubmit={this.handleFormSubmit}>
          <label>Text:</label>
          <br />
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange} placeholder="text" />
          <br />

          <label>Date:</label>
          <br />
          <input type="date" name="date" value={this.state.date} onChange={this.handleChange} placeholder="date" />
          <br />

          <label>Location:</label>
          <br />
          <input type="text" name="location" value={this.state.location} onChange={this.handleChange} placeholder="location" />
          <br />

          <label>Theme:</label>
          <br />
          <input type="text" name="theme" value={this.state.theme} onChange={this.handleChange} placeholder="theme" />
          <br />

          <input type="submit" value="ADD NEW" className="btn" />

        </form>
      </div>
    );
  }
}

export default withAuth (QuoteNew);
// funciona bien pero lo ideal seria que al drle al enviar, primero salga una notificacion conforme se ha guardado la info y segundo te lleve a otra pagina en donde 
// hayan 2 botones un update y un delete de esta forma se edita o se borra  y luego de aqui sino editas o borras un tercer boton que te redirija a tu user/home en donde este tu cita creada.