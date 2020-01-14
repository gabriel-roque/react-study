import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import RouterView from "routes";

export default function Menu() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
          </div>
        </div>
      </nav>
      <RouterView />
    </Router>
  );
}
