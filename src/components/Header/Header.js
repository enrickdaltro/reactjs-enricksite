import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="nav-header">
        <h4>Enrick Daltro</h4>
        <ul className="nav-items">
          <li>videos</li>
          <li>photos</li>
          <li>contact</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
