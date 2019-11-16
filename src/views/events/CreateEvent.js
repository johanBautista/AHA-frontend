/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../Context/AuthContext';
import logo from '../../img/logo.png';
import eventService from '../../services/eventService';
import EventList from './EvenList';

class CreateEvent extends Component {
  state = {
    title: '',
    description: '',
    location: '',
    date: '',
    owner: this.props.user._id,
    event: [],
  };

  actualizarEvent = async () => {
    const {
      user: { _id },
    } = this.props;
    const event = await eventService.getAllEventUser(_id);
    this.setState({
      event: [...event],
    });
  };

  async componentDidMount() {
    try {
      this.actualizarEvent();
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    await eventService.createEvent(this.state);
    this.setState(
      {
        title: '',
        description: '',
        location: '',
        date: '',
      },
    );
    this.actualizarEvent();
  };

  render() {
    const { event } = this.state;
    return (
      <div>
        <div className="home-features">
          <Link to={'/'}>
            <img className="role-img-home" src={logo} alt="doso" />
          </Link>
        </div>
        <h2>Create Events</h2>
        <form onSubmit={this.handleFormSubmit} className="Form">
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title" />
          <textarea
            type="textarea"
            rows="5"
            cols="55"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Description"
            className="textarea-style"
          />
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            placeholder="Location"
          />
          <input type="date" name="date" value={this.state.date} onChange={this.handleChange} placeholder="Date" />
          <input type="submit" value="ADD NEW" className="connect-btn" />
        </form>
        {event.map(aEvent => {
          return (
            <div key={aEvent._id} className="style-card">
              <EventList event={aEvent} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuth(CreateEvent);
