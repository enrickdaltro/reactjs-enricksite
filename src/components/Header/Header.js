import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <ul className="header-navbar">
        <li className="left-icon">
          <a href="#">Enrick Daltro</a>
        </li>
        <li className="right-icons">
          <li>
            <a href="#">videos</a>
          </li>
          <li>
            <a href="#">photos</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </li>
      </ul>
    );
  }
}

export default Header;
