import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbar.scss';
// Font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHome,
  faUser,
  faQuestion,
  faTimes,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShow = () => {
    // Toggle show menu in phone devices
    setShowMenu(!showMenu);
  };
  return (
    <>
      <button className="header-button" onClick={() => handleShow()}>
        <span>Menu</span>
        {showMenu ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>

      <div
        className={showMenu ? 'showmenu navbar-container' : 'navbar-container'}
      >
        <div className="navigation">
          <Link
            className="navbar__link"
            to="/"
            onClick={() => setShowMenu(false)}
          >
            <FontAwesomeIcon icon={faHome} className="link-icon" />
            Home
          </Link>

          <Link
            className="navbar__link"
            to="/about"
            onClick={() => setShowMenu(false)}
          >
            <FontAwesomeIcon icon={faQuestion} className="link-icon" />
            About
          </Link>
        </div>
        <div className="user-navigation">
          <Link
            className="navbar__link"
            to="/login"
            onClick={() => setShowMenu(false)}
          >
            <FontAwesomeIcon icon={faSignInAlt} className="link-icon" />
            Log-in
          </Link>
          <Link
            className="navbar__link"
            to="/profile"
            onClick={() => setShowMenu(false)}
          >
            <FontAwesomeIcon icon={faUser} className="link-icon" />
            Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
