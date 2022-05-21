import React from 'react';
import './style.css';
import DeCast_logo from '../../assets/DeCast-lcon.svg';



function Footer() {
  return (
    <div className='footer'>
      <a className="footer__logo-block">
      <img src={DeCast_logo} alt="" className="footer-logo" />
      <p>DeCast</p>
      </a>
    <p className="footer__advatneges">про преимущества/технологии про преимущества/</p>
    <p className="footer__advatneges">про преимущества/технологии про преимущества/</p>
    </div>
  );
}

export default Footer;
