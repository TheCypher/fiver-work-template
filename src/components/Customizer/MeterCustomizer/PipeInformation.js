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

function PipeInformation({ handleChange, value }){
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
                        price_effect: false
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
                        price_effect: false
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
                        price_effect: false
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

export default PipeInformation;
