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
  UncontrolledTooltip,
  NavItem,
  NavLink,
} from "reactstrap";

function FlowBody({handleChange, value }){
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

  const MakeChangeDropdown = (data) => {
    data.option_value = data.option.target.value;
    console.log('Show me Question Or Comments data 1.0 =>', data);
    const values = data.values;
    const first_value = values[0]
    
    if(first_value != data.option_value){
      values.removeWithValue(data.option_value)
      values[0] = data.option_value;
      values.splice(1,0, first_value);
      values.join();
      data.values = values;
      console.log('Show me pipe option data 1.0 =>', data);
    } else {
      console.log('Show me pipe option data 1.0 =>', data);
    }

    handleChange(data);
  }

  const MakeChange = (data) => {
    handleChange(data);
  }

  var title = 'Flow Body Wetted Materials';
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
                <FormGroup>
                  <label htmlFor="exampleFormControlSelect1">
                    <span className="customizerInputTitle">Sensor Material</span>
                    <Button className="questionToolTip" id="SensorMaterial" size="sm">
                      ?
                    </Button>{` `}
                    <UncontrolledTooltip placement="right" target="SensorMaterial" delay={0}>
                      RTD Sheath Material
                    </UncontrolledTooltip>
                  </label>
                  <Input
                    className="epiInputSize"
                    id="exampleFormControlSelect1"
                    type="select"
                    onChange={ (e) => MakeChangeDropdown({
                      section: 'flow_body',
                      type: 'sensors',
                      values: [
                        'cer',
                        'sss',
                        'has'
                      ],
                      price_effect: true,
                      option: e
                    }, e)}
                  >
                    <option value="" selected disabled>Select Sensor Material</option>
                    <option value="sss">316L SSS</option>
                    <option value="has">C-276 HAS</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <br />
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitle">Sensor Shield</span>
            </label>
            <Row className="text-center">
              <Col>
                <CardImg style={{'width': '152.65px', 'height': '150px'}} alt="..." src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg" top></CardImg>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <span className="customizerInputTitleSmallX1">Standard Sensor - No Shield</span>
                    <Input
                      defaultChecked
                      onClick={ (e) => MakeChange({
                        section: 'flow_body',
                        type: 'sensors_shield',
                        values: ['standard', 'rod', 'sheild'],
                        price_effect: true,
                      }, e)}
                      id="type"
                      name="type"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <p>
                  The standard sensor shroud will work best for most flow conditions.
                </p>
              </Col>
              <Col>
                <CardImg style={{'width': '152.65px', 'height': '150px'}} alt="..." src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg" top></CardImg>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <span className="customizerInputTitleSmallX1"> Standard Sensor + Attenuation Rod</span>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'flow_body',
                        type: 'sensors_shield',
                        values: ['rod', 'standard', 'sheild'],
                        price_effect: true,
                      }, e)}
                      id="type"
                      name="type"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <p>
                  Select the attenuation rod in high flow rate conditions to help avoid sensor damage.
                </p>
              </Col>
              <Col>
                <CardImg style={{'width': '152.65px', 'height': '150px'}} alt="..." src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg" top></CardImg>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <span className="customizerInputTitleSmallX1"> Standard Sensor + Particulate Shield</span>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'flow_body',
                        type: 'sensors_shield',
                        values: ['sheild', 'rod', 'standard'],
                        price_effect: true,
                      }, e)}
                      id="type"
                      name="type"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <p>
                  Select the particulate shield only if you expect solid particles in your flow.
                </p>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default FlowBody;
