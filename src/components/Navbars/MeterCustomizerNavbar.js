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
        <Navbar className="epi-customerizer-nav-gray cNavbar" color="off-white" expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()} style={{ 'color': 'white'}}>

              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="example-navbar-danger"
                type="button"
              >
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
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
                    <p>Orientation</p>
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
                    <p>Housing</p>
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
                    <p>Communication</p>
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
                    <p>Application</p>
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
                    <p>Parameters</p>
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
                    <p>Sensor</p>
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
                    <p>Mounting</p>
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
                    <p>Pipe</p>
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
                    <p>Enhancements</p>
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
                    <p>Comments</p>
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
