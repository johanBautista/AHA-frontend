import React from 'react';
// import { Link } from 'react-router-dom';
import { withAuth } from './Context/AuthContext';
import jumbotron from './abril14.jpg';
import './index.css';

const Home = () => {
  return (
    <div>
      <h1>HOMEPAGE</h1>
      {/* aqui quiero poner un link que me envie a homepage  pero no puedo poner un link */}
      <p>Jumbotron</p>
      <div className="jumbotron">
        <img src={jumbotron} alt="jumbotron" />
      </div>

      <p>links de login/signup</p>
      <a href="/login" className="btn">
        login
      </a>
      <br />
      <a href="/signup" className="btn">
        signup
      </a>
      <p>cards de quotes y events</p>
    </div>
  );
};

export default withAuth(Home);
