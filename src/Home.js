import React from 'react';
import { Link } from 'react-router-dom';
import jumbotron from './img/jumbotron.png';
import logo from './img/logo.png';
import logo2 from './img/logo-login.png';
import logo3 from './img/icon-home.png';
import QuoteCard from './views/quotes/QuoteCard';

import './index.css';


const Home = () => {
  return (
    <div>
      <div className="home-jumbotron">
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
          <span>Ahaa! Moment</span>
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
