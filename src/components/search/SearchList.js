import React from 'react';
import SearchListItem from './SearchListItem';

const SearchList = (props) => {
  // console.log(props.quotes);

  const searchItems = props.quotes.map(quote => {
    return <SearchListItem key={quote._id} quote={quote} />;
  });

  return (
    <ul>
      {/* <li>hola rap</li> */}
      {/* {props.quotes.length} */}
      {searchItems}
    </ul>
  );
};

export default SearchList;
