import React from "react";

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function ProductViewNavbar({navbarData, pills, setPills}) {
  return(
    <>
      <Navbar className="bg-epi-blue" style={{'min-height': '80px'}} expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()} style={{ 'color': 'white'}}>
              <p style={{'font-size': '1.8571em'}}>{ navbarData.product_title }</p><br />
              { navbarData.product_type }
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-danger"
              type="button"
            >
              <span className="navbar-toggler-bar-2 bar1"></span>
              <span className="navbar-toggler-bar-2 bar2"></span>
              <span className="navbar-toggler-bar-2 bar3"></span>
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#example-navbar-danger">
            <Nav className="ml-auto" navbar style={{'font-size': '1.1em'}}>
              <NavItem className={pills === "1" ? "active" : ""}>
                <NavLink
                  href="#pablo"
                  style={{ 'color': 'white', 'border-bottom': '2px solid whitesmoke' }}
                  onClick={(e) => {
                    e.preventDefault();
                    setPills("1");
                  }}
                >
                  <i className="now-ui-icons objects_globe"></i>
                  <p>Discover</p>
                </NavLink>
              </NavItem>

              <NavItem className={pills === "2" ? "active" : ""}>
                <NavLink
                  href="#pablo"
                  style={{ 'color': 'white' }}
                  onClick={(e) => {
                    e.preventDefault();
                    setPills("2");
                  }}
                >
                  <i className="now-ui-icons objects_globe"></i>
                  <p>Tech Specs</p>
                </NavLink>
              </NavItem>

              <NavItem className={pills === "3" ? "active" : ""}>
                <NavLink
                  href="#pablo"
                  style={{ 'color': 'white' }}
                  onClick={(e) => {
                    e.preventDefault();
                    setPills("3");
                  }}
                >
                  <i className="now-ui-icons objects_globe"></i>
                  <p>CAD Files</p>
                </NavLink>
              </NavItem>

              <NavItem className={pills === "4" ? "active" : ""}>
                <NavLink
                  href="#pablo"
                  style={{ 'color': 'white' }}
                  onClick={(e) => {
                    e.preventDefault();
                    setPills("4");
                  }}
                >
                  <i className="now-ui-icons objects_globe"></i>
                  <p>Support</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ProductViewNavbar;