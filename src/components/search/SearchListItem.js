import React from 'react';

const SearchListItem = ({ quote }) => {
  // console.log(quote);

  return (
    <div className="style-card">
      <li className="info-card">{quote.text}</li>
    </div>
  );
};

export default SearchListItem;
