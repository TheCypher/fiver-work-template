import React from "react";
// reactstrap components
import {
  Row,
  Col,
  Button,
} from "reactstrap";
// core components

import MeterCustomizerNavbar from "components/Navbars/MeterCustomizerNavbar";
import CustomTab from "./CustomTab";
import TotalCard from "./TotalCard";

function Customizer(){
  return (
    <>
      <div className="section section-about-us" style={{ 'background': '#EBF2FF', 'padding-bottom': '50px', 'padding-top': ''}}>
        <MeterCustomizerNavbar />
        <h3 className="title text-center">Meter Customizer</h3>
        <p className="text-center">Description text</p>
        <Col className="ml-auto mr-auto" md="10">
          <Row>
            <Col className="ml-auto mr-auto" md="9">
              <CustomTab />
            </Col>

            <Col className="ml-auto mr-auto" md="3">
              <TotalCard />
            </Col>
          </Row>
          <div className="separator separator-primary"></div>
        </Col>
      </div>
    </>
  );
}

export default Customizer;