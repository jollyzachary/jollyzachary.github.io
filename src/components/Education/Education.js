import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Education.css';
import { education } from '../../portfolio';

function Education(props) {
    const { header } = props;
    const [data, setData] = useState(education);
    const [width, setWidth] = useState('50vw');
    const [mode, setMode] = useState('VERTICAL_ALTERNATING');
  
    useEffect(() => {
      if (window?.innerWidth < 576) {
        setMode('VERTICAL');
      }
  
      if (window?.innerWidth < 576) {
        setWidth('90vw');
      } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
        setWidth('90vw');
      } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
        setWidth('75vw');
      } else {
        setWidth('50vw');
      }
    }, []);
  
    return (
      <div className="education-container">
        <div className="education-page__title">
          <h2>Education</h2>
        </div>
        <div className="education-page__list">
          {data.map((item) => (
            <div key={item.title} className="education-page__group">
              <div className="education-page__group-item">
                <img src={item.icon.src} alt={item.title} />
              </div>
              <div className="education-page__group-item">
                <h3>{item.title}</h3>
                <p>{item.cardTitle}</p>
                <p>{item.cardSubtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

Education.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Education;
