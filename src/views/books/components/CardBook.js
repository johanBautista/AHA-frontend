import React from 'react';
import { withTheme } from '../../../Context/ThemeContext';

const CardBook = (props) => {
  const { book: { title, author, description, rating }, theme, changeTheme } = props;
  return (
      <div>
        <p>
          BookDetail: {theme}
        </p>
        <label htmlFor="">title</label>
        <p>{title}</p>
        <label htmlFor="">author</label>
        <p>{author}</p>
        <label htmlFor="">description</label>
        <p>{description}</p>
        <label htmlFor="">rating</label>
        <p>{rating}</p>
        <button onClick={changeTheme}>change Theme</button>
      </div>
  );
};

export default withTheme(CardBook);