import React from "react";
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
} from "reactstrap";

import {
  TabContent,
  TabPane
} from "reactstrap";

function PipeInformation({ handleChange, value }){
  const [tabType, setTabType] = React.useState("Pipe");
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
    setTabType(data.tab);
  }

  const MakeChangeDropdown = (data) => {
    data.option_value = data.option.target.value;
    handleChange(data);
  }

  var title = 'Pipe Information';
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
            aria-expanded={collapses.includes(1)}
            data-toggle="collapse"
            href="#pablo"
            onClick={e => {
              e.preventDefault();
              changeCollapse(1);
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

        <Collapse isOpen={collapses.includes(1)}>
          <CardBody>
            <Row>
              <Col>
                <span>Type</span>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        Pipe
                      </Col>
                    </Row>
                    <Input
                      defaultChecked
                      onClick={ (e) => MakeChange({
                        section: 'pipe_infornation',
                        type: 'type',
                        values: ['pipe', 'duct', 'tube'],
                        price_effect: false,
                        tab: 'Pipe'
                      }, e)}
                      id="type"
                      name="type"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        Duct
                      </Col>
                    </Row>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'pipe_infornation',
                        type: 'type',
                        values: ['duct', 'pipe', 'tube'],
                        price_effect: false,
                        tab: 'Duct'
                      }, e)}
                      id="type"
                      name="type"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        Tube
                      </Col>
                    </Row>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'pipe_infornation',
                        type: 'type',
                        values: ['tube', 'duct', 'pipe'],
                        price_effect: false,
                        tab: 'Tube'
                      }, e)}
                      id="type"
                      name="type"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup><br />

                <span>Pipe Standard</span>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        ANSI
                      </Col>
                    </Row>
                    <Input
                      defaultChecked
                      onClick={ (e) => MakeChange({
                        section: 'pipe_infornation',
                        type: 'pipe_standard',
                        values: ['ansi', 'jis', 'din'],
                        price_effect: false
                      }, e)}
                      id="pipe_standard"
                      name="pipe_standard"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        JIS
                      </Col>
                    </Row>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'pipe_infornation',
                        type: 'pipe_standard',
                        values: ['jis', 'ansi', 'din'],
                        price_effect: false
                      }, e)}
                      id="pipe_standard"
                      name="pipe_standard"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        Tube
                      </Col>
                    </Row>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'pipe_infornation',
                        type: 'pipe_standard',
                        values: ['din', 'ansi', 'jis'],
                        price_effect: false
                      }, e)}
                      id="pipe_standard"
                      name="pipe_standard"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup><br />
              </Col>

              <Col className="col-9">
                <TabContent activeTab={"tabs" + tabType}>
                  <TabPane tabId="tabsPipe">
                    <Row>
                      <Col>
                        <FormGroup>
                          <label htmlFor="exampleFormControlSelect1">Pipe Size</label>
                          <Input
                            id="exampleFormControlSelect1"
                            type="select"
                            style={{ 'border-radius': '6px'}}
                            onChange={ (e) => MakeChangeDropdown({
                              section: 'pipe_infornation',
                              type: 'pipe_size',
                              values: [
                                '0.75',
                                '1.5',
                                '1',
                                '1_0.25',
                                '1_1.5',
                                '2',
                                '2_1.5',
                                '3',
                                '4'
                              ],
                              price_effect: false,
                              option: e
                            }, e)}
                          >
                            <option value="1.5">1.5 in</option>
                            <option value="0.75">0.75 in</option>
                            <option value="1">1 in</option>
                            <option value="1_0.25">1 - 0.25 in</option>
                            <option value="1_1.5">1 - 1.5 in</option>
                            <option value="2">2 in</option>
                            <option value="2_1.5">2 - 1.5 in</option>
                            <option value="3">3 in</option>
                            <option value="4">4 in</option>
                          </Input>
                        </FormGroup>
                      </Col>

                      <Col>
                        <FormGroup>
                          <label htmlFor="exampleFormControlSelect1">Schedule</label>
                          <Input id="exampleFormControlSelect1" type="select" style={{ 'border-radius': '6px'}}>
                            <option>40</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row style={{ 'margin-top': '20px'}}>
                      <Col>
                        <FormGroup>
                          <label htmlFor="exampleFormControlInput1">Inner Diameter (ID)</label>
                          <Input
                            id="exampleFormControlInput1"
                            placeholder="Select Pipe Size & Schedule Above"
                            type="number"
                            style={{ 'border-radius': '6px', 'background-color': '#EBF2FF'}}
                          ></Input>
                        </FormGroup>
                      </Col>
                      <Col className='col-1 my-auto'><br /> in</Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="tabsDuct">
                    <p>
                      Duct
                    </p>
                  </TabPane>
                  <TabPane tabId="tabsTube">
                    <p>
                      Tube
                    </p>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default PipeInformation;
