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


function MainNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

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
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              {
                /**
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
                 */
              }

            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                Dropdown header
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Separated link
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                One more separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              href="#"
              target="_blank"
              id="navbar-brand"
            >
              <img
                alt="..."
                className=""
                src={require("assets/img/logo1.png").default}
              ></img>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              EPI Products
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              data-toggle="dropdown"
              href="#pablo"
              id="linkTogglerMobile"
              type="button"
            >
              <span className="navbar-toggler-bar top-bar" style={{ 'color': 'black'}}></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>

          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem className="active">
                <UncontrolledDropdown>
                  <DropdownToggle
                    aria-haspopup={true}
                    caret
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    id="linkToggler"
                    nav
                    onClick={e => e.preventDefault()}
                  >
                    SELECT PRODUCT
                  </DropdownToggle>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <NavLink to="/index" tag={Link}>
                  FIND A REP
                </NavLink>
              </NavItem>
              <NavItem>
                <DropdownToggle
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="linkToggler"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  TECHNICAL INFO
                </DropdownToggle>
              </NavItem>
              <NavItem>
                <DropdownToggle
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  GET SUPPORT
                </DropdownToggle>
              </NavItem>
              <NavItem>
                <NavLink to="/index" tag={Link}>
                  ABOUT
                </NavLink>
              </NavItem>
              <NavItem>
                <DropdownToggle
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons users_circle-08"></i>
                  JAY ALLAN
                </DropdownToggle>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
