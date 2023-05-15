import React from 'react';
import uniqid from 'uniqid';
import { skills } from '../../portfolio';
import './Skills.css';

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skillGroup) => (
          <li key={uniqid()} className='skills__group'>
            <h3>{skillGroup.title}</h3>
            <ul className='skills__group-list'>
              {skillGroup.items.map((skill) => (
                <li key={uniqid()} className='skills__group-item'>
                  <img src={skill.icon} alt={skill.title} />
                  <p>{skill.title}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
