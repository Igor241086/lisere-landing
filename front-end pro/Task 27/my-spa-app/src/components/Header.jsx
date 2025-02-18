import React from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/contacts">Контакти</Link></li>
          <li><Link to="/about">Про мене</Link></li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;