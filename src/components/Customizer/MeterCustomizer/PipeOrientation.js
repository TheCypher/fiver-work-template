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

function PipeOrientation({ nextStep, prevStep, handleChange, value }){
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  // collapse states and functions
  const [collapses, setCollapses] = React.useState([1]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  // for back even listner
  const GoBack = e => {
    e.preventDefault();
    prevStep();
  }

  const MakeChange = (data) => {
    console.log('Show me make change data 1.0 =>', data);
    handleChange(data);
  }

  var title = 'Meter Orientation';
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
                <span>Pipe Orientation</span>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        Horizion
                      </Col>
                    </Row>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'meter_orientation',
                        type: 'pipe_orientation',
                        values: ['horizion', 'vertical'],
                        price_effect: true
                      }, e)}
                      id="pipe_orientation"
                      name="pipe_orientation"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        Vertical
                      </Col>
                    </Row>
                    <Input
                      defaultChecked
                      onClick={ (e) => MakeChange({
                        section: 'meter_orientation',
                        type: 'pipe_orientation',
                        values: ['vertical', 'horizion'],
                        price_effect: true
                      }, e)}
                      id="pipe_orientation"
                      name="pipe_orientation"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup><br />

                <span>Flow Direction</span>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        Top to Bottom
                      </Col>
                    </Row>
                    <Input
                      defaultChecked
                      onClick={ (e) => MakeChange({
                        section: 'meter_orientation',
                        type: 'flow_direction',
                        values: ['top_to_bottom', 'bottom_to_top'],
                        price_effect: false
                      }, e)}
                      id="flow_direction"
                      name="flow_direction"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        Bottom to Top
                      </Col>
                    </Row>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'meter_orientation',
                        type: 'flow_direction',
                        values: ['bottom_to_top', 'top_to_bottom'],
                        price_effect: false
                      }, e)}
                      id="flow_direction"
                      name="flow_direction"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup><br />


                <span>Enclosure Mounting Preference</span>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        Left Side
                      </Col>
                    </Row>
                    <Input
                      defaultChecked
                      onClick={ (e) => MakeChange({
                        section: 'meter_orientation',
                        type: 'enclosure_mounting_preference',
                        values: ['left_side', 'right_side'],
                        price_effect: false
                      }, e)}
                      id="enclosure_mounting_preference"
                      name="enclosure_mounting_preference"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        Right Side
                      </Col>
                    </Row>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'meter_orientation',
                        type: 'enclosure_mounting_preference',
                        values: ['right_side', 'left_side'],
                        price_effect: false
                      }, e)}
                      id="enclosure_mounting_preference"
                      name="enclosure_mounting_preference"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup><br />

                <span>Display Orientation</span><br />
                <Button
                  color="info"
                  size="lg"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Rotate 90
                </Button>
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

export default PipeOrientation;
