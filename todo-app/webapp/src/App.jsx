import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import React from "react";
import Menu from "components/Menu";
import RouterView from "routes";

import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Menu />
        <RouterView />
      </Router>
    </div>
  );
}
