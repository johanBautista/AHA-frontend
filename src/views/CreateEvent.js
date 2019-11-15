/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class CreateEvent extends Component {
  render() {
    return (
      <div>
        <h2>Create Events</h2>
        <form onSubmit={}>
          <input type="text" name="title" value={} onChange={} placeholder="Title"/>
          <input type="text" name="description" value={} onChange={} placeholder="Description"/>
          <input type="text" name="location" value={} onChange={} placeholder="Location"/>
          <input type="date" name="date" value={} onChange={} placeholder="Date"/>
          <input type="submit" value="ADD NEW" className="connect-btn" />
        </form>
      </div>
    );
  }
}

export default CreateEvent;
