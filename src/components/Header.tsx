import React from "react";
import logo from "../assets/icons/code.svg";
import "../styles/css/style.css";
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <header className="main-head">
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Ivan Ivanov</h1>
        </div>
        <ul>
          <li>
            <NavLink to="/"  className={(navData) => (navData.isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects"  className={(navData) => (navData.isActive ? 'active' : '')}>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact"  className={(navData) => (navData.isActive ? 'active' : '')}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Header);