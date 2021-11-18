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

function InputPower({ handleChange, value }){
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [otherOptions, setOtherOptions] = useState(true);

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
    if(data.other_select){
      setOtherOptions(true);
    } else {
      setOtherOptions(false);
    }

    handleChange(data);
  }

  var title = 'Input Power & Communication Options';
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
                    <span className="customizerInputTitle">Input Power</span>
                    <Button className="questionToolTip" id="Application" size="sm">
                      ?
                    </Button>{` `}
                    <UncontrolledTooltip placement="right" target="Application" delay={0}>
                      Select Input Power
                    </UncontrolledTooltip>
                    </label>
                  <Input
                    className="epiInputSize"
                    id="exampleFormControlSelect1"
                    type="select"
                    onChange={ (e) => MakeChangeDropdown({
                      section: 'input_power_communication',
                      type: 'input_power',
                      values: [
                        'cd12_dc24',
                        'vac115_vac230'
                      ],
                      price_effect: false,
                      option: e
                    }, e)}
                  >
                    <option value="" selected disabled hidden>Select Input Power</option>
                    <option value="cd12_dc24">DC12 & DC24</option>
                    <option value="vac115_vac230">VAC115 & VAC230</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col></Col>
            </Row>
            <hr />

            <Row>
              <Col className="inputPowerCommunicationCols">
                <span>
                  <span className="customizerInputTitleSmallX1">4-20MA FLOW OUTPUT</span>
                  <Button className="questionToolTip" id="MAFLOWOUTPUT" size="sm">
                      ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="MAFLOWOUTPUT" delay={0}>
                  4-20MA FLOW OUTPUT Information needed
                  </UncontrolledTooltip>
                </span>
              </Col>

              <Col className="inputPowerCommunicationCols">
                Two
              </Col>

              <Col className="inputPowerCommunicationCols">
                Three
              </Col>

              <Col className="inputPowerCommunicationCols">
                Four
              </Col>
            </Row>
            <hr />
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default InputPower;
