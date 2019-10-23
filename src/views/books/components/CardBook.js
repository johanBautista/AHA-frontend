import React from 'react';
import { withAuth } from '../../../Context/AuthContext';

const CardBook = (props) => {
  const { book: { title, author, description, rating }, user } = props;
  return (
      <div>
        <p>
          user: {user.username}
        </p>
        <label htmlFor="">title</label>
        <p>{title}</p>
        <label htmlFor="">author</label>
        <p>{author}</p>
        <label htmlFor="">description</label>
        <p>{description}</p>
        <label htmlFor="">rating</label>
        <p>{rating}</p>
      </div>
  );
};

export default withAuth(CardBook);