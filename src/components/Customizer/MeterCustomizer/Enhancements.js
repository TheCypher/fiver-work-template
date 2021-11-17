import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';

// reactstrap components
import {
  UncontrolledCollapse,
  Button,
  Card,
  CardBody,
  CardImg,
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
  const [collapses, setCollapses] = React.useState([0]);
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
                      price_effect: false,
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
                    COO - Certificate of Origin info needed
                  </UncontrolledTooltip>
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <span className="customizerInputTitleSmallX1">O2CLN - Certified Oxygen Clean and Bag with Certificate</span>
                  <Input
                    onClick={ (e) => MakeChangeCheckbox({
                      section: 'enhancements',
                      type: 'certificates_oxygen',
                      values: ['oxygen', 'none'],
                      price_effect: false,
                      option: e
                    }, e)}
                    id="certificates_oxygen"
                    name="certificates_oxygen"
                    type="checkbox"
                  ></Input>
                  <span className="form-check-sign"></span>
                  <Button className="questionToolTip" id="O2CLNCertificate" size="sm">
                    ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="O2CLNCertificate" delay={0}>
                    O2CLN - Certified Oxygen info needed
                  </UncontrolledTooltip>
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <span className="customizerInputTitleSmallX1">EPI Hydrostatic & Leak Test Certificate</span>
                  <Input
                    onClick={ (e) => MakeChangeCheckbox({
                      section: 'enhancements',
                      type: 'certificates_leak',
                      values: ['leak', 'none'],
                      price_effect: false,
                      option: e
                    }, e)}
                    id="certificates_leak"
                    name="certificates_leak"
                    type="checkbox"
                  ></Input>
                  <span className="form-check-sign"></span>
                  <Button className="questionToolTip" id="HydrostaticCertificate" size="sm">
                    ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="top" target="HydrostaticCertificate" delay={0}>
                    EPI Hydrostatic & Leak Test Certificate info needed
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
                      price_effect: false,
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
                    WPQ & WPS & PQR - Welding Certifications info needed
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
                    CTP - Calibration Test Points info needed
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
                      price_effect: false,
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
                    As Left Validation Curve info needed
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
                      price_effect: false,
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
                    Positive Material Identification info needed
                  </UncontrolledTooltip>
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <span className="customizerInputTitleSmallX1">Liquid Penetration Test</span>
                  <Input
                    onClick={ (e) => MakeChangeCheckbox({
                      section: 'enhancements',
                      type: 'test_liquid',
                      values: ['liquid', 'none'],
                      price_effect: false,
                      option: e
                    }, e)}
                    id="test_liquid"
                    name="test_liquid"
                    type="checkbox"
                  ></Input>
                  <span className="form-check-sign"></span>
                  <Button className="questionToolTip" id="LiquidCertificate" size="sm">
                    ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="LiquidCertificate" delay={0}>
                    Liquid Penetration Test info needed
                  </UncontrolledTooltip>
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <span className="customizerInputTitleSmallX1">Ferrite Test - Welds</span>
                  <Input
                    onClick={ (e) => MakeChangeCheckbox({
                      section: 'enhancements',
                      type: 'test_welds',
                      values: ['welds', 'none'],
                      price_effect: false,
                      option: e
                    }, e)}
                    id="test_welds"
                    name="test_welds"
                    type="checkbox"
                  ></Input>
                  <span className="form-check-sign"></span>
                  <Button className="questionToolTip" id="WeldsCertificate" size="sm">
                    ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="WeldsCertificate" delay={0}>
                    Ferrite Test - Welds info needed
                  </UncontrolledTooltip>
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <span className="customizerInputTitleSmallX1">Ferrite Test - All Wetted Parts</span>
                  <Input
                    onClick={ (e) => MakeChangeCheckbox({
                      section: 'enhancements',
                      type: 'test_wetted',
                      values: ['wetted', 'none'],
                      price_effect: false,
                      option: e
                    }, e)}
                    id="test_wetted"
                    name="test_wetted"
                    type="checkbox"
                  ></Input>
                  <span className="form-check-sign"></span>
                  <Button className="questionToolTip" id="WettedCertificate" size="sm">
                    ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="WettedCertificate" delay={0}>
                    Ferrite Test - All Wetted Parts info needed
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
                Extended Warranty info needed info needed
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
                      price_effect: false
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
                      price_effect: false
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
                      price_effect: false
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
                      price_effect: false
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
                Stainless Steel ID Tag info needed
              </UncontrolledTooltip>
              <FormGroup check inline>
                <Label check>
                  <span className="customizerInputTitleSmallX1">Add Stainless Steel ID Tag</span>
                  <Input
                    onClick={ (e) => MakeChangeCheckbox({
                      section: 'enhancements',
                      type: 'stainless',
                      values: ['stainless', 'none'],
                      price_effect: false,
                      option: e
                    }, e)}
                    id="stainless"
                    name="stainless"
                    type="checkbox"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup><br /><br />

              {/* new */}

              <span className="customizerInputTitle">Electropolish Flow Section & Sensor</span>
              <Button className="questionToolTip" id="ElectropolishFlow" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="ElectropolishFlow" delay={0}>
                Electropolish Flow info needed
              </UncontrolledTooltip>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <span className="customizerInputTitleSmallX1">None</span>
                  <Input
                    onClick={ (e) => MakeChange({
                      section: 'enhancements',
                      type: 'electropolish',
                      values: ['none', 'sensor', 'section', 'section_sensor'],
                      price_effect: false
                    }, e)}
                    id="electropolish"
                    name="electropolish"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <span className="customizerInputTitleSmallX1">Sensor Only</span>
                  <Input
                    onClick={ (e) => MakeChange({
                      section: 'enhancements',
                      type: 'electropolish',
                      values: ['sensor', 'section', 'section_sensor', 'none'],
                      price_effect: false
                    }, e)}
                    id="electropolish"
                    name="electropolish"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <span className="customizerInputTitleSmallX1">Fow Section Only</span>
                  <Input
                    onClick={ (e) => MakeChange({
                      section: 'enhancements',
                      type: 'electropolish',
                      values: [ 'section', 'sensor', 'section_sensor', 'none'],
                      price_effect: false
                    }, e)}
                    id="electropolish"
                    name="electropolish"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <span className="customizerInputTitleSmallX1">Flow Section & Sensor (All Wetted Parts)</span>
                  <Input
                    defaultChecked
                    onClick={ (e) => MakeChange({
                      section: 'enhancements',
                      type: 'electropolish',
                      values: [ 'section_sensor', 'sensor', 'section', 'none'],
                      price_effect: false
                    }, e)}
                    id="electropolish"
                    name="electropolish"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
            </Col>
          </Row>
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default Enhancements;
