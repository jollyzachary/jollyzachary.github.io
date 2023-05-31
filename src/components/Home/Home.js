import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import './Home.css';

const Home = () => (
  <div className="home">
    <Container className="home__content">
      <Typography variant="h1" className="home__title">Zachary Jolly.</Typography>
      <Typography variant="h6" className="home__subtitle">
        <ul className="home__bullet-points">
          <li className="home__role">Bringing ideas to life through coding and programming</li>
          <li className="home__role">Passionate about AI implementation and innovation</li>
          <li className="home__role">Dedicated to delivering business solutions and automation</li>
        </ul>
      </Typography>
      <Link to="/about" className="btn btn--outline">Discover more about Zachary</Link>
    </Container>
  </div>
);

export default Home;
