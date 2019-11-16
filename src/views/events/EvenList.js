import React, { Component } from 'react';
import logo from '../../img/logo.png';

class EvenList extends Component {
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
          <button onClick={e => this.deleteQuote(e)} className="connect-btn">
          DELETE
        </button>
        </div>
      </div>
    );
  }
}

export default EvenList;
