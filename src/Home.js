import React from 'react';
import { Link } from 'react-router-dom';
import jumbotron from './abril14.jpg';
import './index.css';
import QuoteCard from './views/QuoteCard';

const Home = () => {
  return (
    <div>
      <h1>HOMEPAGE</h1>
      <p>Jumbotron</p>
      <div className="jumbotron">
        <img src={jumbotron} alt="jumbotron" />
      </div>

      <p>links de login/signup</p>
      <Link to={'/login'} className="btn">
        Login
      </Link>
      <Link to={'/signup'} className="btn">
        Signup
      </Link>

      <p>cards de quotes y events</p>

      <QuoteCard />
    </div>
  );
};

export default Home;
