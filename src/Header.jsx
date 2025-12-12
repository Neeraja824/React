import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header-root">
      <div className="header-inner">
        <div className="brand">
          {/* <div className="brand-badge">PP</div>
          <span className="brand-text">Product Portal</span> */}
        </div>
        <nav className="nav-links">
          <Link className="nav-link" to="/form">Add Data</Link>
          <Link className="nav-link" to="/cards">View Data</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
