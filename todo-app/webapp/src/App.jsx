import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import React from "react";
import Menu from "./template/Menu";

export default function App(props) {
  return (
    <div className="container">
      <Menu />
    </div>
  );
}
