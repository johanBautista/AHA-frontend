/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import eventService from '../../services/eventService';
import EventList from './EvenList';

class CreateEvent extends Component {
  state = {
    title: '',
    description: '',
    location: '',
    date: '',
    event: [],
  };

  async componentDidMount() {
    try {
      const event = await eventService.getAllEvents();
      this.setState({
        event,
      });
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
    // console.log(this.state);
    await eventService.createEvent(this.state);
    this.setState(
      {
        title: '',
        description: '',
        location: '',
        date: '',
      },
      // this.props.handleQuote(this.state),
    );
  };

  render() {
    const { event } = this.state;
    return (
      <div>
        <h2>Create Events</h2>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title" />
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Description"
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

export default CreateEvent;
