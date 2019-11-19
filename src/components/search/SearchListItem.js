import React from 'react';
// import { Link } from 'react-router-dom';

const SearchListItem = ({ quote }) => {
  return (
    <div className="style-card">
      <p className="info-card">{quote.text}</p>
    </div>
  );
};

export default SearchListItem;
