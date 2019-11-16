import React from 'react';
import SearchListItem from './SearchListItem';

const SearchList = props => {
  const searchItems = props.quotes.map(quote => {
    return <SearchListItem key={quote._id} quote={quote} />;
  });

  return <ul>{searchItems}</ul>;
};

export default SearchList;
