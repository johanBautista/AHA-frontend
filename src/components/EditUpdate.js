import React, { Component } from 'react';
// import List from './QuoteList';

// 1. crear constructor con los state de term e items
class Edit extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    category: '',
    ocupation:'',
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
    const { username, email, password, category, ocupation } = this.setState;
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
        <h3>Formulario x Edit perfil</h3>

          <label>Username:</label>
          <br />
          <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="username" />
          <br />

          <label>Email:</label>
          <br />
          <input type="date" name="email" value={email} onChange={this.handleChange} placeholder="email" />
          <br />

          <label>Password:</label>
          <br />
          <input type="text" name="password" value={password} onChange={this.handleChange} placeholder="password" />
          <br />

          <label>Category:</label>
          <br />
          <input type="text" name="category" value={category} onChange={this.handleChange} placeholder="category" />
          <br />

          <label>Ocupation:</label>
          <br />
          <input type="text" name="ocupation" value={ocupation} onChange={this.handleChange} placeholder="ocupation" />
          <br />
          {/* <label>term</label>
          <input type="text" name="term"value={this.state.term} onChange={this.onChange} />
          <label>title</label>
          <input type="text" name="title" value={this.state.title} onChange={this.onChange} /> */}
          <button className="btn">Submit</button>
        </form>
        {/* <List items={this.state.items} /> */}
      </div>
    );
  }
}

export default Edit;
