import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import React from "react";
import Menu from "components/Menu";

// React Router
import RouterView from "routes";
import { BrowserRouter as Router } from "react-router-dom";

// React Redux
import { Provider } from "react-redux";
import store from "./modules/core/store/index";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Provider store={store}>
          <Menu />
          <RouterView />
        </Provider>
      </Router>
    </div>
  );
}
