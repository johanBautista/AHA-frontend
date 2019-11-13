import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import quoteService from '../services/quoteService';
// import searchBar from './SearchBar';
import logo from '../img/logo.png';
import SearchBar from './SearchBar';

class QuoteList extends Component {
  state = {
    quotes: [],
    searched: [],
    // user:''
  };

  // async componentDidMount() {
  //   try {
  //     const quotes = await quoteService.getAllQuotes();
  //     this.setState({
  //       quotes,
  //     });
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // }

  // handleChange = event => {
  //   this.props.onSearch(event.target.value);
  // };

  findQuote = query => {
    const { quotes } = this.state;
    if (query !== '') {
      const result = quotes.filter(item => {
        return item.name.toLowerCase().includes(query.toLowerCase());
      });
      this.setState({
        searched: result,
      });
    } else {
      this.setState({
        searched: [],
      });
    }
  };

  render() {
    const { quotes, searched } = this.state; // loading
    return (
      <div>
        <div className="home-features">
          <Link to={'/'}>
            <img className="role-img-home" src={logo} alt="dos" />
          </Link>
        </div>

        <SearchBar onSearch={this.findQuote} />
        {/* <div className="column">
              {searched && <div> {searched.map((item, index) => {
                  return (
                    <FoodBox key={`${item.name}-${index}`} name={item.name} calories={item.calories} image={item.image} addTheFood={this.addTodayFood}/>
                  )
              })} </div> }
              {searched.length === 0 && <div> {foods.map((item, index) => {
                  return (
                    <FoodBox key={`${item.name}-${index}`} name={item.name} calories={item.calories} image={item.image} addTheFood={this.addTodayFood}/>
                  )
              })} </div> } 
           </div>  */}
        {/* ////////////////////////////////////////////// */}

        {quotes.map(quote => {
          return (
            <div key={quote._id} className="style-card">
              <Link to={`/quotes/${quote._id}`} className="info-card">
                {quote.text}{' '}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default QuoteList;
