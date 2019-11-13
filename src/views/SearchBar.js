// import React, { Component } from 'react';

// class SearchBar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { term: '' };
//   }

//   render() {
//     return (
//       <div className="intro-text">
//         <input
//           type="text"
//           value={this.state.term}
//           onChange={event => this.setState({ term: event.target.value })}
//           placeholder="Search"
//           // className="search-style"
//         />
//         <button className="search-btn">Buscar</button>
//       </div>
//     );
//   }
// }

// export default SearchBar;

import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = event => {
    this.props.onSearch(event.target.value);
  };

  render() {
    return (
      <div>
        <input type="text" className="search-style" name="search" placeholder="Search" onChange={this.handleChange} />
      </div>
    );
  }
}

export default SearchBar;
