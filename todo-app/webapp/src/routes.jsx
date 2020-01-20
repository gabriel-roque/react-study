import React from "react";
import { Route, Redirect } from "react-router-dom";

import routesTodo from "modules/todo/routes";
import routesChat from "modules/chat/routes";

const routes = [...routesTodo, ...routesChat];

export default function Routes() {
  const makeRoutes = () =>
    routes.map((e, i) => (
      <Route key={i} exact path={e.path} component={e.component} />
    ));

  return (
    <React.Fragment>
      {makeRoutes()}
      <Route path="*">
        <Redirect to="/todos" />
      </Route>
    </React.Fragment>
  );
}
