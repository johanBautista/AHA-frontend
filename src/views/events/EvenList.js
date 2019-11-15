import React, { Component } from 'react';

class EvenList extends Component {
  render(props) {
    return (
      <div>
        <h2>aqui estamos en la lista{this.props.description}</h2>
        <p>
                  {this.props.description}

        </p>
      </div>
    );
  }
}

export default EvenList;
