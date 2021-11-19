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

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default" style={{ 'background-color': '#012E82', 'height': '302px', 'color': 'white'}}>
        <Row>
          <Col></Col>
          <Col className="text-center my-auto col-6">
            <span style={{ 'color': 'white', 'font-size': '28px'}}>Stay Up to Date</span><br />
            <span>Get the latest news and product updates from the EPI team periodically. Don’t worry,</span><br />
            <span>we hate spam too!</span>
            <InputGroup>
              <Input
                style={{
                  'background-color': 'white',
                  'height': '48px',
                  'width': '200px',
                  'border': '1px solid #E3E3E3',
                  'border-radius': '6px',
                  'border-top-right-radius': '0px',
                  'border-bottom-right-radius': '0px',
                  'border-right': '0px',
                  'margin-right': '0px',
                }}
              />
              <Button
              className="my-auto primary"
              color="info"
              size="lg"
              style={{
                'border-radius': '6px',
                'border-top-left-radius': '0px',
                'border-bottom-left-radius': '0px',
                'border-left': '0px',
                'margin-left': '0px',
              }}
              >
                Subscribe
              </Button>
            </InputGroup>
          </Col>
          <Col></Col>
        </Row>
      </footer>

      {/* new */}
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

      <footer className="footer footer-default">
        <Container>
          <Row className="footerLogosContainer">
          <Nav>
            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>
          </Nav>
          </Row>
        </Container>
      </footer>

      <footer className="footer footer-default footerContactInfo">
        <Container>
          <Row>
            <Col>
              <span className="footerContactInfoTitle">Call Us</span><br />
              <span className="footerContactInfoText">1-800-321-FLOW</span>
              <br />
              <br />

              <span className="footerContactInfoTitle">Email Us</span><br />
              <span className="footerContactInfoText">info@epiflow.com</span><br />
              <span className="footerContactInfoText">sales@epiflow.com</span>
            </Col>

            <Col>
              <span className="footerContactInfoTitle">Business Hours</span><br /><br />
              <Row>
                <Col><span className="footerContactInfoTextGray">Monday - Friday</span></Col>
                <Col><span className="footerContactInfoTextGray">7:30am-5pm PST</span></Col>
              </Row>

              <Row>
                <Col><span className="footerContactInfoTextGray">Saturday & Sunday</span></Col>
                <Col><span className="footerContactInfoTextGray">Closed</span></Col>
              </Row>

              <br />
              <span className="footerContactInfoTextGray">Need to contact us after hours?</span><br />
              <Button
                color="info"
                style={{ 'color': 'white' }}
                size="lg"
                outline
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Send Us a Message
              </Button>
            </Col>
            <Col>
              <span className="footerContactInfoText">Social Media</span><br />
              <span className="footerContactInfoTextGray">Follow EPI for Updates & Announcements</span>
              <br />
              <br />
              <Row>
                <Col>
                  <img
                    alt="..."
                    className="img-raised footerContactInfoSocialImgs"
                    src={require("assets/img/bg7.jpg").default}
                  ></img>
                </Col>
                <Col>
                  <img
                    alt="..."
                    className="img-raised footerContactInfoSocialImgs"
                    src={require("assets/img/bg7.jpg").default}
                  ></img>
                </Col>
                <Col>
                  <img
                    alt="..."
                    className="img-raised footerContactInfoSocialImgs"
                    src={require("assets/img/bg7.jpg").default}
                  ></img>
                </Col>
                <Col>
                  <img
                    alt="..."
                    className="img-raised footerContactInfoSocialImgs"
                    src={require("assets/img/bg7.jpg").default}
                  ></img>
                </Col>
                <Col>
                  <img
                    alt="..."
                    className="img-raised footerContactInfoSocialImgs"
                    src={require("assets/img/bg7.jpg").default}
                  ></img>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>


      <footer className="footer footer-default footerBlack">
        <Container>
          <span className="footerBlackText">© 1988-2021 Eldridge Products, Inc. All Rights Reserved.  465 Reservation Rd., Marina, CA 93933</span><br />
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            <span className="footerBlackCopyright">Proudly Designed & Manufactured in the USA</span>
            <img
              style={{ 'height': '19.51px', 'margin-left': '5px'}}
              alt="..."
              className="img-raised footerContactInfoSocialImgs"
              src={require("assets/img/bg7.jpg").default}
            ></img>
            <br />
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
