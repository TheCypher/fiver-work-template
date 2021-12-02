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
  UncontrolledTooltip
} from "reactstrap";

function MeterHousing({handleChange, value }){
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
                    <span className="customizerInputTitle">Display
                      <Button className="questionToolTip" id="Display" size="sm">
                        ?
                      </Button>{` `}
                      <UncontrolledTooltip placement="right" target="Display" delay={0}>
                        A 2-Line Backlit Liquid Crystal Transflective display is included with EPI flow meters. 
                        It is easy to read in low light or high light conditions, 
                        and will come with the orientation specified in the above section.
                      </UncontrolledTooltip>
                    </span><br />
                    <FormGroup check className="form-check-radio">
                      <Label check>
                        <span className="customizerInputTitleSmallX1">Display with keypad</span>
                        <Input
                          defaultChecked
                          onClick={ (e) => MakeChange({
                            section: 'meter_housing',
                            type: 'display',
                            values: ['display', 'no-display'],
                            price_effect: false
                          }, e)}
                          id="display"
                          name="display"
                          type="radio"
                        ></Input>
                        <span className="form-check-sign"></span>
                      </Label>
                    </FormGroup>
                    <FormGroup check className="form-check-radio">
                      <Label check>
                        <span className="customizerInputTitleSmallX1">No Display</span>
                        <Input
                          onClick={ (e) => MakeChange({
                            section: 'meter_housing',
                            type: 'display',
                            values: ['no-display', 'display'],
                            price_effect: false
                          }, e)}
                          id="display"
                          name="display"
                          type="radio"
                        ></Input>
                        <span className="form-check-sign"></span>
                      </Label>
                    </FormGroup><br />
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
