import React, { Component } from 'react';
import List from './List';

// 1. crear constructor con los state de term e items
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      title: '',
    };
  }

  // 2. crear onChange y onSubmit
  onChange = event => {
    this.setState({ term: event.target.value });
  };

  // 3. crear onSubmit
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term],
    });
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <form className="App" onSubmit={this.onSubmit}>
        <label htmlFor="title">t</label>
          <input value={this.state.term} onChange={this.onChange} />
          <label htmlFor="title">title</label>
          <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default Form;
