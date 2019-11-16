import React from 'react';

const SearchListItem = ({ quote }) => {
  return (
    <div className="style-card">
      <li className="info-card">{quote.text}</li>
    </div>
  );
};

export default SearchListItem;
