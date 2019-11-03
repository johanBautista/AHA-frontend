import React from 'react';
import { Link } from 'react-router-dom';
import jumbotron from './jumbotron.png';
import logo from './logo.png';
import logo2 from './logo2.png';
import logo3 from './logo3.png';

import './index.css';
import QuoteCard from './views/QuoteCard';

const Home = () => {
  return (
    <div>
      <div className="home-jumbotron">
        <img src={jumbotron} alt="jumbotron" />
        <img src={jumbotron} alt="jumbotron" />
        <img src={jumbotron} alt="jumbotron" />
      </div>
      <section className="home-login">
        <Link to={'/login'} className="btn">
          LOGIN
        </Link>
        <Link to={'/signup'} className="btn">
          SIGNUP
        </Link>
      </section>

      <div className="home-description">
        <div className="intro-text">
          <h2>The measure of intelligence is the ability to change.</h2>
        </div>

        <div className="home-features">
          <img className="role-img-home" src={logo2} alt="uno" />
          <span>I have a idea...</span>
        </div>
        <div className="home-features">
          <img className="role-img-home" src={logo} alt="dos" />
          <span>aha! Moment</span>
        </div>
        <div className="home-features">
          <img className="role-img-home" src={logo3} alt="tres" />
          <span>Share</span>
        </div>
      </div>

      <QuoteCard />
    </div>
  );
};

export default Home;
