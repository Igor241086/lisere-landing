import React from 'react';
import './Header.scss';
import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <header className="site-header">
      <div className="grid-15 site-header__inner">
        <div className="site-header__logo">
          <img src={logo} alt="LISIÈRE logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
