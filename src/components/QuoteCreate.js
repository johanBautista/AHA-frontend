import React, { Component } from 'react';
// import List from './QuoteList';

// 1. crear constructor con los state de term e items
class Form extends Component {
  state = {
    text: '',
    date: '',
    location: '',
    theme: '',
  };

  // 2. crear onChange y onSubmit
  // onChange = event => {
  //   this.setState({ term: event.target.value });
  // };

  // // 3. crear onSubmit
  // onSubmit = event => {
  //   event.preventDefault();
  //   this.setState({
  //     term: '',
  //     items: [...this.state.items, this.state.term],
  //   });
  // };

  render() {
    const { text, date, location, theme } = this.setState;
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <label>Text:</label>
          <br />
          <input type="text" name="text" value={text} onChange={this.handleChange} placeholder="text" />
          <br />

          <label>Date:</label>
          <br />
          <input type="date" name="date" value={date} onChange={this.handleChange} placeholder="date" />
          <br />

          <label>Location:</label>
          <br />
          <input type="text" name="location" value={location} onChange={this.handleChange} placeholder="location" />
          <br />

          <label>Theme:</label>
          <br />
          <input type="text" name="theme" value={theme} onChange={this.handleChange} placeholder="theme" />
          <br />

          {/* <label>term</label>
          <input type="text" name="term"value={this.state.term} onChange={this.onChange} />
          <label>title</label>
          <input type="text" name="title" value={this.state.title} onChange={this.onChange} /> */}
          <button>Submit</button>
        </form>
        {/* <List items={this.state.items} /> */}
      </div>
    );
  }
}

export default Form;
