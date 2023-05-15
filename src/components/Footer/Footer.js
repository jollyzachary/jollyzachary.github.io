import React from 'react';
import './Footer.css';

const Footer = ({ mode }) => (
  <footer className={`footer ${mode}`}>
    <a
      href='https://github.com/jollyzachary'
      className='link footer__link'
    >
      Stoked
    </a>
  </footer>
);

export default Footer;
