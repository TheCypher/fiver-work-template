import React, { useState } from "react";

// reactstrap components
import {
  TabContent,
  TabPane,
  Row,
  Col,
  Button,
} from "reactstrap";

// core components
import ProductViewNavbar from "components/Navbars/ProductViewNavbar";
import ImageViewer from "components/Customizer/ImageViewer";
import MeterCustomizerNavbar from "components/Navbars/MeterCustomizerNavbar";

function HazFatInlineProductView(){
  const [pills, setPills] = useState("1");
  const navbarData = {
    product_title: '8700 MPHAZ-FAT',
    product_type: 'INLINE FLOW METER'
  }

  return (
    <>
      <div className="section section-about-us" style={{ 'background': 'whitesmoke', 'padding-bottom': '50px', 'border-bottom': 'whitesmoke'}}>
        <ProductViewNavbar
          navbarData={navbarData}
          pills={pills}
          setPills={setPills}
        />
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

export default HazFatInlineProductView;