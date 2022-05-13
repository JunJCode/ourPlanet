import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import earth from '../images/earth.png';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <nav id="nav">
      <div className="navbar-container">
        <Link to="/">
          <img className="logo" src={earth} alt="logo" />
        </Link>
        <Link to="/" className="navbar-logo">
          OurPlanet
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Articles
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/books" className="nav-links" onClick={closeMobileMenu}>
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/inf" className="nav-links" onClick={closeMobileMenu}>
              Influencer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
