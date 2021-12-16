import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ExamplePage from "views/ExamplePage";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => ExamplePage()
  }
];

function Routes() {
  return (
  <Router>
    <Switch>
      {
        routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route 
            key={index} 
            path={route.path} 
            exact={route.exact} 
            children={<route.component />} />
        ))
      }
    </Switch>
  </Router>
  );
}

export default Routes;