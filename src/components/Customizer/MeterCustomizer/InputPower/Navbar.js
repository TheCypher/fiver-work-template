import React from "react";

// reactstrap components
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

function NavbarInputPower({ setIconTabs, iconTabs, selectInputOptions }){
  return (
    <>
      <Navbar expand="lg" className="inputPowerCommunicationNav">
        <Container>
            <Nav className="ml-auto" navbar>
              <NavItem className={iconTabs === "1" ? "active" : ""}>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    setIconTabs("1");
                  }}
                >
                  <span className="customizerInputTitleSmallX1">Standard (MODBUS RTU)</span>
                </NavLink>
              </NavItem>
              <NavItem className={iconTabs === "2" ? "active" : ""}>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    setIconTabs("2");
                  }}
                >
                  <span className="customizerInputTitleSmallX1">Multi-Range + Temp Out</span>
                </NavLink>
              </NavItem>
              <NavItem className={iconTabs === "3" ? "active" : ""}>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    setIconTabs("3");
                  }}
                >
                  <span className="customizerInputTitleSmallX1">Multi-Range + No Temp</span>
                </NavLink>
              </NavItem>

              { !selectInputOptions ? (
                <NavItem className={iconTabs === "4" ? "active" : ""}>
                  <NavLink
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setIconTabs("4");
                    }}
                  >
                    <span className="customizerInputTitleSmallX1">HART</span>
                  </NavLink>
                </NavItem>
              ) : (
                <div></div>
              )}

              <NavItem className={iconTabs === "5" ? "active" : ""}>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    setIconTabs("5");
                  }}
                >
                  <span className="customizerInputTitleSmallX1">BACnet</span>
                </NavLink>
              </NavItem>
              
              { !selectInputOptions ? (
                <NavItem className={iconTabs === "6" ? "active" : ""}>
                  <NavLink
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setIconTabs("6");
                    }}
                  >
                    <span className="customizerInputTitleSmallX1">Profibus</span>
                  </NavLink>
                </NavItem>
              ) : (
                <div></div>
              )}
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarInputPower;
