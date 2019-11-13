import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="intro-text">
        <input
          type="text"
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
          placeholder="Search"
        />
        {/* <button className="search-btn">Buscar</button> */}
      </div>
    );
  }
}

export default SearchBar;


