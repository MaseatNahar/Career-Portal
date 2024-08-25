import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Statistics">Statistics</Link>
      <Link to="/Jobs">Applied Jobs</Link>
      <Link to="/Blogs">Blogs</Link>
    </nav>
  );
};

export default Header;
