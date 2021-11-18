import React from "react";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  TabContent,
  TabPane,
  Row,
  Col,
  Button,
} from "reactstrap";
// core components

import ImageViewer from "./ImageViewer";
import MobileMenuTest from "components/Headers/MobileMenuHeader/MobileMenuTest";
import MeterCustomizerNavbar from "components/Navbars/MeterCustomizerNavbar";

function ProductView(){
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-about-us" style={{ 'background': 'whitesmoke', 'padding-bottom': '50px', 'border-bottom': 'whitesmoke'}}>
        <Navbar className="bg-epi-blue" style={{'min-height': '80px'}} expand="lg">
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

      
        <TabContent className="gallery" activeTab={"pills" + pills}>
          <TabPane tabId="pills1">
            <Col className="ml-auto mr-auto" md="10">
              <Row className="collections">
                <Col md="6" style={{'margin-bottom': '20px'}}>
                  <h3><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit</strong></h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. 
                  </p>
                  <Row style={{ 'margin-top': '40px', 'margin-bottom': '10px'}}>
                    <Col className="col-1" style={{'font-size': '2.3em'}}>
                      <i className="now-ui-icons objects_globe"></i>
                    </Col>
                    <Col className="col-4">
                      METER TYPE <br /> 
                      <strong>Inline</strong>
                    </Col>

                    <Col className="col-1" style={{'font-size': '2.3em'}}>
                      <i className="now-ui-icons objects_globe"></i>
                    </Col>
                    <Col className="col-4">
                      ENCLOSURE <br /> 
                      <strong>Integrated Electronics</strong>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="col-1" style={{'font-size': '2.3em'}}>
                      <i className="now-ui-icons objects_globe"></i>
                    </Col>
                    <Col className="col-4">
                      WARRANTY <br /> 
                      <strong>5 Years</strong>
                    </Col>

                    <Col className="col-1" style={{'font-size': '2.3em'}}>
                      <i className="now-ui-icons objects_globe"></i>
                    </Col>
                    <Col className="col-6">
                      CERTIFICATIONS <br /> 
                      <strong>CE, CSA/CUS, IECEx, KOSHA, ATEX</strong>
                    </Col>
                  </Row>

                  <Row style={{ 'margin-top': '10px', 'margin-bottom': '10px'}}>
                    <Col className="col-5"><Button color="info">Customize Your Meter</Button></Col>
                    <Col className="col-6 my-auto"><a href="#pablo">Find a Representative Near You</a></Col>
                  </Row>

                  <Row>
                    <Col className="col-6">Not sure which meter is right for you?</Col>
                    <Col className="col-3"><a href="#pablo">Help me choose.</a></Col>
                  </Row>
                </Col>
                <Col md="6">
                  <ImageViewer />
                  <MobileMenuTest />
                </Col>
              </Row>
            </Col>
          </TabPane>
          <TabPane tabId="pills2">
            <Col className="ml-auto mr-auto" md="10">
              <Row className="collections">
                <Col md="6">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require("assets/img/bg6.jpg").default}
                  ></img>
                  <img
                    alt="..."
                    className="img-raised"
                    src={require("assets/img/bg11.jpg").default}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require("assets/img/bg7.jpg").default}
                  ></img>
                  <img
                    alt="..."
                    className="img-raised"
                    src={require("assets/img/bg8.jpg").default}
                  ></img>
                </Col>
              </Row>
            </Col>
          </TabPane>
          <TabPane tabId="pills3">
            <Col className="ml-auto mr-auto" md="10">
              <Row className="collections">
                <Col md="6">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require("assets/img/bg3.jpg").default}
                  ></img>
                  <img
                    alt="..."
                    className="img-raised"
                    src={require("assets/img/bg8.jpg").default}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="img-raised"
                    src={require("assets/img/bg7.jpg").default}
                  ></img>
                  <img
                    alt="..."
                    className="img-raised"
                    src={require("assets/img/bg6.jpg").default}
                  ></img>
                </Col>
              </Row>
            </Col>
          </TabPane>
        </TabContent>
      </div>

      <div className="section section-about-us">
        <Col className="ml-auto mr-auto" md="10">
          <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h3 className="title text-center">Product Description</h3>
                <p className="description1">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
                </p>

                <p className="description1">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
                </p>

                <p className="description1">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice extent in the Pacific and a late drop in ice extent
                  in the Barents Sea.
                </p>
              </Col>
            </Row>
              <div className="separator separator-primary"></div>
        </Col>
      </div>
    </>
  );
}

export default ProductView;