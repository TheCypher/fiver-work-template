import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';

// reactstrap components
import {
  UncontrolledCollapse,
  Button,
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  CardHeader,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Collapse,
  UncontrolledTooltip
} from "reactstrap";

function Enhancements({handleChange, value }){
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  // collapse states and functions
  const [collapses, setCollapses] = useState([0]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };

  const MakeChange = (data) => {
    handleChange(data);
  }

  const MakeChangeCheckbox = (data) => {
    if(!data.option.target.checked){
      data.values = ['none', data.values[0]]
      handleChange(data);
    } else {
      handleChange(data);
    }
  }

  var title = 'Enhancements';
  if (isMobile) {
    if(title.length > 18) title = title.substring(0,18) + '...';
  }

  return (
    <>
      <Card style={{
        'border-top-left-radius': 'calc(.45rem - 1px)',
        'border-top-right-radius': 'calc(.45rem - 1px)',
        'border-bottom-left-radius': 'calc(.45rem - 1px)',
        'border-bottom-right-radius': 'calc(.45rem - 1px)'
        }}>
        <CardHeader>
          <a
            aria-expanded={collapses.includes(2)}
            data-toggle="collapse"
            href="#pablo"
            onClick={e => {
              e.preventDefault();
              changeCollapse(2);
            }}
          >
            <Navbar className="bg-epi-blue" style={{
              'height': '10px', 'margin-bottom': '5px',
              'border-top-left-radius': 'calc(.45rem - 1px)',
              'border-top-right-radius': 'calc(.45rem - 1px)'
              }} expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()} style={{'font-size': '22px', 'color': 'white'}}>
                    <p>{ title }</p>
                  </NavbarBrand>
                  <button
                    className="navbar-toggler"
                    id="example-navbar-danger"
                    type="button"
                    aria-expanded={collapses.includes(2)}
                    onClick={e => {
                      e.preventDefault();
                      changeCollapse(2);
                    }}
                  >
                    <i className="now-ui-icons arrows-1_minimal-down" style={{'font-size': '22px', 'color': 'white'}}></i>
                  </button>
                </div>
                <UncontrolledCollapse navbar toggler="#example-navbar-danger">
                  <Nav className="ml-auto" navbar style={{'font-size': '22px', 'color': 'white'}}>
                    <i className="now-ui-icons arrows-1_minimal-down"></i>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
          </a>
        </CardHeader>

        <Collapse isOpen={collapses.includes(2)}>
          <CardBody>
          <Row>
            <Col>
              <span className="customizerInputTitle">Certificates</span>
              <br /><br />
              <FormGroup check inline>
                <Label check>
                  <span className="customizerInputTitleSmallX1">COO - Certificate of Origin notarized by Chamber of Commerce</span>
                  <Input
                    onClick={ (e) => MakeChangeCheckbox({
                      section: 'enhancements',
                      type: 'certificates_origin',
                      values: ['orgin', 'none'],
                      price_effect: true,
                      option: e
                    }, e)}
                    id="certificates_origin"
                    name="certificates_origin"
                    type="checkbox"
                  ></Input>
                  <span className="form-check-sign"></span>
                  <Button className="questionToolTip" id="COOCertificate" size="sm">
                    ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="COOCertificate" delay={0}>
                    A certificate of origin certifies the country where the goods originated, 
                    and it may be required by the government of the country where your goods are imported. 
                    It’s also frequently used to determine how much duty the importer will pay to bring in your goods.
                  </UncontrolledTooltip>
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <span className="customizerInputTitleSmallX1">WPQ & WPS & PQR - Welding Certifications (per order)</span>
                  <Input
                    onClick={ (e) => MakeChangeCheckbox({
                      section: 'enhancements',
                      type: 'certificates_welding',
                      values: ['welding', 'none'],
                      price_effect: true,
                      option: e
                    }, e)}
                    id="certificates_welding"
                    name="certificates_welding"
                    type="checkbox"
                  ></Input>
                  <span className="form-check-sign"></span>
                  <Button className="questionToolTip" id="WPQCertificate" size="sm">
                    ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="WPQCertificate" delay={0}>
                    A Welding Procedure Specification, or WPS, is a document that serves as a guide for the 
                    effective creation of a weld that meets all applicable code requirements and production 
                    standards. This includes information such as base metal grade, filler metal classification, 
                    amperage range, shielding gas composition, and pre-heat and interpass temperatures.  
                    The procedures for creating and testing the sample welds, as well as the final results, 
                    are documented on a Procedure Qualification Record, or PQR. If the test results are 
                    acceptable, the PQR is approved and can then serve as the foundation on which one or 
                    more WPSs are drafted. In short, a PQR serves as evidence that a given WPS can, in fact, 
                    be used to produce an acceptable weld.     
                    A Welder Performance Qualification (WPQ) is a test certificate that shows whether a welder 
                    possesses the necessary experience and knowledge to perform the specifications of a particular weld procedure.
                  </UncontrolledTooltip>
                </Label>
              </FormGroup><br /><br />

              {/* new */}

              <span className="customizerInputTitle">Calibration Enhancements</span>
              <FormGroup check inline>
                <Label check>
                  <span className="customizerInputTitleSmallX1">CTP - Calibration Test Points [+$225]</span>
                  <Input
                    onClick={ (e) => MakeChangeCheckbox({
                      section: 'enhancements',
                      type: 'calibration_ctp',
                      values: ['ctp', 'none'],
                      price_effect: true,
                      option: e
                    }, e)}
                    id="calibration_ctp"
                    name="calibration_ctp"
                    type="checkbox"
                  ></Input>
                  <span className="form-check-sign"></span>
                  <Button className="questionToolTip" id="CTPCertificate" size="sm">
                    ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="CTPCertificate" delay={0}>
                    CTP (Calibration Test Points) is a calibration verification of the microprocessor's programing.
                    This is done by simulating the flow rate using software to verify the accuracy of the analog flow 
                    signal to the primary standards calibration curve. This should include a minimum of 5 test points 
                    at 25% intervals of the flow range.
                  </UncontrolledTooltip>
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <span className="customizerInputTitleSmallX1">As Left Validation Curve [+$X]</span>
                  <Input
                    onClick={ (e) => MakeChangeCheckbox({
                      section: 'enhancements',
                      type: 'calibration_left_curve',
                      values: ['left_curve', 'none'],
                      price_effect: true,
                      option: e
                    }, e)}
                    id="calibration_left_curve"
                    name="calibration_left_curve"
                    type="checkbox"
                  ></Input>
                  <span className="form-check-sign"></span>
                  <Button className="questionToolTip" id="LeftCertificate" size="sm">
                    ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="LeftCertificate" delay={0}>
                    As Left Validation Curve refers to the comparison of EPI's Primary standards to your D.U.T. (device under test). 
                    It is done to show the accuracy of your flow meter when compared to the primary standards used by EPI. 
                    10 Data Points are provided (contact us for more).
                  </UncontrolledTooltip>
                </Label>
              </FormGroup><br /><br />

              <span className="customizerInputTitle">Tests</span><br />
              <FormGroup check inline>
                <Label check>
                  <span className="customizerInputTitleSmallX1">Positive Material Identification (PMI) Test</span>
                  <Input
                    onClick={ (e) => MakeChangeCheckbox({
                      section: 'enhancements',
                      type: 'test_pmi',
                      values: ['pmi', 'none'],
                      price_effect: true,
                      option: e
                    }, e)}
                    id="test_pmi"
                    name="test_pmi"
                    type="checkbox"
                  ></Input>
                  <span className="form-check-sign"></span>
                  <Button className="questionToolTip" id="PMICertificate" size="sm">
                    ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="PMICertificate" delay={0}>
                    Positive Material Identification (PMI) is a fast and non-destructive testing (NDT) method for verifying 
                    the chemical composition of metals and alloys. PMI can be used to verify that supplied materials conform 
                    to the proper standards and specifications.     If selected, your meter will be tested before shipment and 
                    sent with the certificate of passing.
                  </UncontrolledTooltip>
                </Label>
              </FormGroup>
              {/* new */}
            </Col>

            <Col>
              <span className="customizerInputTitle">Extended Warranty</span>
              <Button className="questionToolTip" id="ExtendedWarranty" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="ExtendedWarranty" delay={0}>
                Extend your product warranty by up to 3 years, billed at 10% of the meter list price per year.
              </UncontrolledTooltip>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <span className="customizerInputTitleSmallX1">None</span>
                  <Input
                    defaultChecked
                    onClick={ (e) => MakeChange({
                      section: 'enhancements',
                      type: 'warranty',
                      values: ['none', '1', '2', '3'],
                      price_effect_warranty: true
                    }, e)}
                    id="warranty"
                    name="warranty"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <span className="customizerInputTitleSmallX1">Add 1 Year</span>
                  <Input
                    onClick={ (e) => MakeChange({
                      section: 'enhancements',
                      type: 'warranty',
                      values: ['1', 'none', '2', '3'],
                      price_effect_warranty: true
                    }, e)}
                    id="warranty"
                    name="warranty"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <span className="customizerInputTitleSmallX1">Add 2 Years</span>
                  <Input
                    onClick={ (e) => MakeChange({
                      section: 'enhancements',
                      type: 'warranty',
                      values: ['2', '1', 'none', '3'],
                      price_effect_warranty: true
                    }, e)}
                    id="warranty"
                    name="warranty"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <span className="customizerInputTitleSmallX1">Add 3 Years</span>
                  <Input
                    onClick={ (e) => MakeChange({
                      section: 'enhancements',
                      type: 'warranty',
                      values: ['3', '1', '2', 'none'],
                      price_effect_warranty: true
                    }, e)}
                    id="warranty"
                    name="warranty"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup><br />

              {/* new */}

              <span className="customizerInputTitle">Stainless Steel ID Tag</span>
              <Button className="questionToolTip" id="StainlessSteel" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="StainlessSteel" delay={0}>
                Laser etched stainless steel tags provide a professional looking tag that is exceptionally tough in extreme environments.
              </UncontrolledTooltip>
              <FormGroup check inline>
                <Label check>
                  <span className="customizerInputTitleSmallX1">Add Stainless Steel ID Tag</span>
                  <br />
                  <Input
                    onClick={ (e) => MakeChangeCheckbox({
                      section: 'enhancements',
                      type: 'stainless',
                      values: ['stainless', 'none'],
                      price_effect: true,
                      option: e
                    }, e)}
                    id="stainless"
                    name="stainless"
                    type="checkbox"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              {/* new */}
            </Col>
          </Row>
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default Enhancements;
