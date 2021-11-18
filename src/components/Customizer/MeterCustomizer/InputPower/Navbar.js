import React, { useState } from "react";

// reactstrap components
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

function NavbarInputPower({ handleChange, value }){
  return (
    <>
      <Navbar expand="lg" className="inputPowerCommunicationNav">
        <Container>
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <span className="customizerInputTitleSmallX1">Standard (MODBUS RTU)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <span className="customizerInputTitleSmallX1">Multi-Range + Temp Out</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <span className="customizerInputTitleSmallX1">Multi-Range + No Temp</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <span className="customizerInputTitleSmallX1">HART</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <span className="customizerInputTitleSmallX1">BACnet</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <span className="customizerInputTitleSmallX1">Profibus</span>
                </NavLink>
              </NavItem>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarInputPower;
