import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="nav-header">
        <h4>Enrick Daltro</h4>
        <ul className="nav-items">
          <Link to="/">
            <li>videos</li>
          </Link>
          <Link to="/photos">
            <li>photos</li>
          </Link>
          <Link to="/contact">
            <li>contact</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Header;
