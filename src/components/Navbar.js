import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
          <Link to="/">Home </Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About Us </Link>
        </div>
    );
};

export default Navbar;