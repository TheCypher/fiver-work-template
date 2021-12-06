import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HazInline from "views/customizer/haz/HazInline";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => HazInline()
  },
  {
    path: "/products/haz/inline/:product?",
    exact: true,
    component: () => HazInline()
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