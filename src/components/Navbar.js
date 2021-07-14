import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/nav.css';

function Navbar() {
  return (
    <div className="nav-container">
      <h1>Math Magicians</h1>
      <div>
        <Link to="/" className="links">Home </Link>
        <Link to="/calculator" className="links">Calculator </Link>
        <Link to="/quote" className="links">Quote </Link>
      </div>
    </div>
  );
}

export default Navbar;
