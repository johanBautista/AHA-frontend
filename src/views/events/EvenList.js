import React, { Component } from 'react';
// import { withAuth } from '../../Context/AuthContext';
import logo from '../../img/logo.png';
import eventService from '../../services/eventService';

class EvenList extends Component {
  state = {
    event: {},
  };

  deleteEvent = async () => {
    const { id } = this.state.event;
    eventService
      .deleteEvent(id)
      .then(() => {
        this.setState({ message: 'event deleted' });
      })
      .catch(() => {});
  };

  render() {
    const { event } = this.props;
    return (
      <div>
        <div>
          <div className="styles-card-event">
            <img src={logo} alt="logo" className="role-img-home" />
            <div>
              <h4>{event.title}</h4>
              <div className="style-card-info">
                <i>{event.date}</i>
                <b>{event.location}</b>
              </div>
            </div>
          </div>
          <i>{event.description}</i>
          <button onClick={e => this.deleteEvent(e)} className="delete-btn">
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

// export default withAuth(EvenList);
export default EvenList;
