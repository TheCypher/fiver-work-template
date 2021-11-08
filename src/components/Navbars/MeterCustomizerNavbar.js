import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import { UncontrolledCollapse, CardBody, Card } from "reactstrap";


function MeterCustomizerNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [pills, setPills] = React.useState("1");


  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
        <Navbar className="epi-customerizer-nav-gray cNavbar" color="info" expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()} style={{ 'color': 'white'}}>
                <p style={{'font-size': '1.8571em'}}>8700 MPHAZ</p><br />
                INLINE FLOW METER
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
              <Nav navbar>
                <NavItem className={pills === "1" ? "active" : ""}>
                  <NavLink
                    href="#pablo"
                    color="default"
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
                    color="default"
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
                    color="default"
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
                    color="default"
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

export default MeterCustomizerNavbar;
