import React from 'react';
import { experience } from '../../portfolio';
import './Experience.css';

const Experience = () => (
    <div className="experience-container">
      <h1>Experience</h1>
      {experience.map((job) => (
        <div key={job.id} className="job">
          <h2>{job.title}</h2>
          <h3>{job.company}</h3>
          <p>{job.dates}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
  

export default Experience;
