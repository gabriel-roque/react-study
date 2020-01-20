import React from "react";

import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-animate navbar-material">
      <Link className="navbar-brand" to="/">
        <i className="fas fa-calendar-week"></i> TodoApp
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/todos">
            Tasks
          </Link>
          <Link className="nav-item nav-link" to="/about">
            About
          </Link>
          <Link className="nav-item nav-link" to="/chat">
            Chat
          </Link>
        </div>
      </div>
    </nav>
  );
}
