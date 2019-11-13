import React from 'react';

const SearchListItem = ({ quote }) => {
  // console.log(quote);

  return (
    <div className="style-card">
      <li className="info-card">{quote.text}</li>
      <li className="info-card">{quote.date}</li>
    </div>
  );
};

export default SearchListItem;
