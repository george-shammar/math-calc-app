import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/calculator">Calculator </Link>
      <Link to="/quote">Quote </Link>
    </div>
  );
}

export default Navbar;
