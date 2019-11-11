import React, { Component } from 'react';
// import quoteService from '../services/quoteService';

class QuoteEdit extends Component {
  state = {
    username: '',
    password: '',
  };

  // async componentDidMount() {
  //   const {
  //     match: {
  //       params: { id },
  //     },
  //   } = this.props;
  //   console.log('id', id);
  //   try {
  //     const quote = await quoteService.getQuoteById(id);
  //     console.log('hola', quote);
  //     this.setState({
  //       quote,
  //     });
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // }

  // handleChange = e => {};

  // handleFormSubmit = e => {};

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h2>Edit profile</h2>
        <form className="form-style" onSubmit={this.handleFormSubmit}>
          {/* <label>Username mother:</label> */}
          <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="username" />
          {/* <label>Password:</label> */}
          <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="password" />
          <input type="file" name="image" id="inputGroupeFile" />
          <label htmlFor="inputGroupeFile"> Choose file</label>
          <input type="submit" value="Update" className="connect-btn" />
        </form>
      </div>
    );
  }
}

export default QuoteEdit;
