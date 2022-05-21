import React from 'react';
import './style.css';
import logo from '../../assets/Logo.png';
import fox from '../../assets/fox-authorization.svg';
import white_fox from '../../assets/authorize-whitefox.svg';
import DeCast_logo from '../../assets/DeCast-lcon.svg';


function Header() {
  return (
    <div className='header'>
      <a href='#' className="header__logo-block">
      <img src={DeCast_logo} alt="" className="footer-logo" />
      <p>DeCast</p>
      </a>
      <nav className='nav'>
        <div className='nav__item'>Menu1</div>
        <div className='nav__item'>Menu1</div>
        <div className='nav__item'>Menu1</div>
        <div className='nav__item'>Menu1</div>
        <button className='other-icon__authorize authorize-white'>
          <img className='authorize__mask blue-fox' src={fox} alt='' />
          {/* <img className='authorize__mask white-fox' src={white_fox} alt='' /> */}
          <p className='authorize__text'>Authorize</p>
        </button>
      </nav>
    </div>
  );
}

export default Header;
