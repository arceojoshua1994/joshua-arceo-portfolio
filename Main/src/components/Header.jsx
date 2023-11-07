// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <nav className="navbar is-spaced gradient-header">
      <div className="navbar-brand">
        <a className="navbar-item">
          <span className="title gradient-text">JA</span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          {/* You can add more navigation links here if needed */}
          <a className="navbar-item is-accent-color-2" href="#">Home</a>
          <a className="navbar-item is-accent-color-2" href="#">About</a>
          <a className="navbar-item is-accent-color-2" href="#">Projects</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
