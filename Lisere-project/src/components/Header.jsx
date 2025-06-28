import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import logo from '../assets/images/logo.svg';

const Header = ({ onLogoClick }) => {
  return (
    <header className="site-header">
      <div className="grid-15 site-header__inner">
        <div className="site-header__logo">
          <button
            type="button"
            className="site-header__logo-button"
            onClick={onLogoClick}
            aria-label="Home"
          >
            <img src={logo} alt="LISIÈRE logo" />
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onLogoClick: PropTypes.func.isRequired,
};

export default Header;
