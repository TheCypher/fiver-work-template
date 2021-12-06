import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import Index from "./views/Index.js";
// import NucleoIcons from "./views/NucleoIcons.js";
// import LoginPage from "./views/examples/LoginPage.js";
// import LandingPage from "./views/examples/LandingPage.js";
// import ProfilePage from "./views/examples/ProfilePage.js";
// import CustomerizerPage from "views/examples/CustomizerPage";
import HazInline from "views/customizer/haz/HazInline";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => HazInline()
  },
  {
    path: "/products/haz/inline/:product?",
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