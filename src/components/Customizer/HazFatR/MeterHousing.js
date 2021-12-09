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

function MeterHousing({handleChange, value }){
  const [remoteCable, setRemoteCable] = useState(10);
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

  const MakeChangeText = (data) => {
    const remote_cable_feet = data.option.target.value;
    data.option_value = +10 + +remote_cable_feet;
    
    setRemoteCable(data.option_value);
    handleChange(data);
  }

  var title = 'Meter Housing';
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
                <Row>
                  <Col className="align-items-center">
                    <span className="customizerInputTitle">Remote Enclosure:</span>
                    <br />

                    <FormGroup check className="form-check-radio">
                      <Label check>
                        <span className="customizerInputTitleSmallX1">Dual Sided Explosion-proof enclosure for hazardous locations</span>
                          <Input
                            defaultChecked
                            onClick={ (e) => MakeChange({
                              section: 'meter_housing',
                              type: 'remote_enclosure',
                              values: ['dual', 'standard'],
                              price_effect: true
                            }, e)}
                            id="display"
                            name="display"
                            type="radio"
                          ></Input>
                        <span className="form-check-sign"></span>
                        <Button className="questionToolTip" id="StandardEnclosureDualSided" size="sm">
                          ?
                        </Button>{` `}
                        <UncontrolledTooltip placement="right" target="StandardEnclosureDualSided" delay={0}>
                          Dual Sided Remote Explosion-proof enclosure with flat glass window; Comes with 2" 
                          pipe mounting bracket assembly; For use in hazardous area locations; Class I Division 1, 
                          Group B, C, D; Class II Group E, F, G; Class III; Enclosure Type 4X; Class I Zone I; AEx 
                          d IIB+H2 IP66; Ex d IIB+H2 IP66; T2; Ta = 0°C to 50°C
                        </UncontrolledTooltip>
                      </Label>
                    </FormGroup>

                    <FormGroup check className="form-check-radio">
                      <Label check>
                        <span className="customizerInputTitleSmallX1">8" x 10" Ordinary Locations (non-explosion proof)</span>
                          <Input
                            onClick={ (e) => MakeChange({
                              section: 'meter_housing',
                              type: 'remote_enclosure',
                              values: ['standard', 'dual'],
                              price_effect: true
                            }, e)}
                            id="display"
                            name="display"
                            type="radio"
                          ></Input>
                        <span className="form-check-sign"></span>
                        <Button className="questionToolTip" id="StandardEnclosure" size="sm">
                          ?
                        </Button>{` `}
                        <UncontrolledTooltip placement="right" target="StandardEnclosure" delay={0}>
                          Fiberglass Reinforced Polyester (FRP) enclosure with window. 
                          Certified to CSA/CUS Standards: Class 2252-03 & 2252-83 for Process 
                          Control Equipment in Ordinary Locations Only; CSA Enclosures Type 4X, IP66
                        </UncontrolledTooltip>
                      </Label>
                    </FormGroup><br />
                    <hr />

                    <span className="customizerInputTitle">Interconnecting Remote Cable:
                      <Button className="questionToolTip" id="InterconnectingRemoteCable" size="sm">
                        ?
                      </Button>{` `}
                      <UncontrolledTooltip placement="right" target="InterconnectingRemoteCable" delay={0}>
                        Interconnecting Remote Cable Info.
                      </UncontrolledTooltip>
                    </span><br />
                    <Row>
                      <Col style={{ 'padding-right': '0'}}>
                        <FormGroup>
                          <span className="customizerInputTitleSmallX1">10’ standard/minimum ($5/ft.)</span>
                          <Input
                            className="epiInputSize"
                            id="exampleFormControlSelect1"
                            type="number"
                            placeholder="Enter Length"
                            maxLength={10}
                            onChange={ (e) => MakeChangeText({
                              section: 'meter_housing',
                              type: 'remote_cable',
                              values: ['feet'],
                              price_effect: false,
                              text_input: true,
                              option: e
                            }, e)}
                          >
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col 
                        className="col-2 my-auto"
                        style={{ 
                          'padding-right': '0',
                          'padding-left': '5px',
                          'padding-top': '10px'
                        }}
                      >
                      <span className="customizerInputTitleSmallX1">{remoteCable}Ft</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col className="text-center">
                <CardImg alt="..." src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg" top></CardImg>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default MeterHousing;
