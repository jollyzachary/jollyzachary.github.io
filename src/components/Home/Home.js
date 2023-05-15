import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Box } from '@material-ui/core';
import './Home.css';

const Home = () => (
  <div className="home">
    <Container>
      <Box className="home__content">
        <Typography variant="h2" component="h1" className="home__title">
          Zachary Jolly
        </Typography>
        <Typography variant="h5" component="h2" className="home__subtitle">
          <span className="home__role">&lt;coder/Jr. Developer&gt;</span>
        </Typography>
        <Typography variant="body1" className="home__description">
          Utilizing Python for automation and data analysis, JavaScript for software development.
        </Typography>
        <Typography variant="h6" component="h3" className="home__engineer">
          | Engineer |
        </Typography>
        <Typography variant="body1" className="home__engineer-description">
          Adaptable problem-solving skills, increased efficiency, and process improvements.
        </Typography>
      </Box>
    </Container>
    <div className="home__image">
      <img src="/images/home/home.jpg" alt="Home" />
    </div>
  </div>
);

export default Home;
