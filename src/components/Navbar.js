import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/nav.css';

function Navbar() {
  return (
    <div className="nav-container">
      <h1>Math Magicians</h1>
      <Link to="/">Home </Link>
      <Link to="/calculator">Calculator </Link>
      <Link to="/quote">Quote </Link>
    </div>
  );
}

export default Navbar;
