import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import quoteService from '../../services/quoteService';
import SearchList from './SearchList';
import logo from '../../img/logo.png';
import SearchBar from './SearchBar';

class QuoteList extends Component {
  constructor(props) {
    super(props);

    this.state = { quotes: [] };
  }

  async componentDidMount(term) {
    try {
      const quotes = await quoteService.getAllQuotes();
      this.setState({
        quotes,
      });
    } catch (error) {
      // console.log(error);
    }
  }

  render() {
    return (
      <div>
        <div className="home-features">
          <Link to={'/'}>
            <img className="role-img-home" src={logo} alt="doso" />
          </Link>
        </div>

        <SearchBar onSearchTermChange={term => this.quoteSearch(term)} />
        <SearchList quotes={this.state.quotes} />
      </div>
    );
  }
}

export default QuoteList;
