import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <h1>Math Magicians</h1>
      <Link to="/">Home </Link>
      <Link to="/calculator">Calculator </Link>
      <Link to="/quote">Quote </Link>
    </div>
  );
}

export default Navbar;
