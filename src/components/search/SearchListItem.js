import React from 'react';

const SearchListItem = ({ quote }) => {
  return (
    <div className="style-card-search">
      <li>{quote.text}</li>
    </div>
  );
};

export default SearchListItem;
