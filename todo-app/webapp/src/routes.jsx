import React from "react";
import { Route, Redirect } from "react-router-dom";

import Todo from "./todo/Todo";
import About from "./about/About";

export default function Routes() {
  return (
    <React.Fragment>
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
      <Route path="*">
        <Redirect to="/todos" />
      </Route>
    </React.Fragment>
  );
}
