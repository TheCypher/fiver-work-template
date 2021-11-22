/*eslint-disable*/
import React from "react";

// reactstrap components
import { 
  Container,
  Row,
  Col,
  Button,
  Input,
  InputGroup,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";

// core components

function Links() {
  return (
    <>
      <footer
      className="footer footer-default"
      style={{
        'background-color': '#000E29',
        'padding-top': '40px'
      }}
      >
        <Container>
          <Row>
            <Col>
              <span className="footerTitle">
                Products
              </span>
              
              <Nav className="flex-column footerNavEpi">
                <NavItem>
                  <NavLink
                    className="footerLink"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    All Meters
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Help Me Choose
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Custom Order
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="footerLink" onClick={e => e.preventDefault()}>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" style={{ 'color': '#B7BDC8', 'font-size': '14px' }}href="#pablo" onClick={e => e.preventDefault()}>
                  Meter Models
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    - EPI-HAZ
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    - EPI-GEN
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    - EPI-VAL
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    - EPI-PURE
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    - EPI-XT
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    - Special Meters
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="footerLink" onClick={e => e.preventDefault()}>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" style={{ 'color': '#B7BDC8', 'font-size': '14px' }}href="#pablo" onClick={e => e.preventDefault()}>
                  Meters by Application
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    - Hazardous Locations
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    - General Locations
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    - High Value
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    - High Purity
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    - High Temperature
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                    - Special Cases
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>

            <Col>
              <span className="footerTitle">
                Information & Resources
              </span>
              
              <Nav className="flex-column footerNavEpi">
                <NavItem>
                  <NavLink
                    className="footerLink"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Technical Information
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  White Papers
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Gases We Flow
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Become a Distributor / Representative
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Media Kit
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Blog
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            
            <Col>
              <span className="footerTitle">
                Support
              </span>
              
              <Nav className="flex-column footerNavEpi">
                <NavItem>
                  <NavLink
                    className="footerLink"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Technical Support
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Service Request
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Find a Representative
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Request a Quote
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Downloads
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  How-To Videos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  FAQ’s
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>

            <Col>
              <span className="footerTitle">
                Company
              </span>
              
              <Nav className="flex-column footerNavEpi">
                <NavItem>
                  <NavLink
                    className="footerLink"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Contact Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Career Opportunities
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Company Leadership
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                  Certifications
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink>
                  </NavLink>
                </NavItem>
                <span className="footerTitle">
                  Customer Portal
                </span>
                
                <Nav className="flex-column footerNavEpi">
                  <NavItem>
                    <NavLink
                      className="footerLink"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Account
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                    Log In
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="footerLink" href="#pablo" onClick={e => e.preventDefault()}>
                    Sign Up
                    </NavLink>
                  </NavItem>
                </Nav>
              </Nav>
            </Col>

          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Links;
