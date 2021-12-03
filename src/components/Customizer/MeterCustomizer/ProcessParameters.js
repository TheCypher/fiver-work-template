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

import FlowRate from "./ProcessParameters/FlowRate";
import Gas from "./ProcessParameters/Gas";
import Ambient from "./ProcessParameters/Ambient";
import Pressure from "./ProcessParameters/Pressure";

function ProcessParameters({handleChange, value, customizerData }){
  const [otherOptions, setOtherOptions] = useState(false);
  const [givenPipeSize, setGivenPipeSize] = useState(0);
  const [givenFlowRate, setGivenFlowRate] = useState(0);
  const [calculatorStatus, setCalculatorStatus] = useState(false);
  const [calculatorError, setCalculatorError] = useState(false);
  const [velocityCalculatorValues, setVelocityCalculatorValues] = useState({
    area: 0,
    velocity: 0
  });

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [errors, setErrors] = useState(
    {
      max_flow_rate: false,
      max_gas_temp: false,
      min_gas_pressure: false
    }
  );

  // collapse states and functions
  const [collapses, setCollapses] = useState([0]);
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

  const MakeChangeText = (data) => {
    data.option_value = data.option.target.value;
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

  const changeFlowRateValue = (data) => {
    setGivenFlowRate(data);
  }

  const velocityCalculator = (inputData) => {
    setCalculatorError(false);
    const pipeSizes = customizerData.pipe_infornation.pipe_size;
    const identifiers = Object.keys(pipeSizes)
    const selectedPipeSize = identifiers.filter(function(id) {
      return pipeSizes[id]
    })
    
    setGivenPipeSize(parseInt(selectedPipeSize));
    
    const flowrate = givenFlowRate;
    const diameter = givenPipeSize;

    // console.log('Show me pipe size in calculator 1.0.1 =>', flowrate);
    const diameterToFeets = (diameter / 12);
    const radius = (diameterToFeets / 2);
    var area = (3.14159265359 * (radius ** 2));
    var velocity = (flowrate / area); // cubic feet per second

    var area = area.toFixed(4);
    var velocity = velocity.toFixed(2);

    if(givenFlowRate > 0){
      setVelocityCalculatorValues(prevState => ({
        ...prevState,
          ['area']: area,
          ['velocity']: velocity
      }));
  
      setCalculatorStatus(true);
    } else {
      setCalculatorStatus(false);
      setCalculatorError(true);
    }
  }

  const CheckErrors = (data) => {
    const { input_name, input_value } = data;

    const set = () => {
      setErrors(prevState => ({
        ...prevState,
          [input_name]: true
      })); 
    }

    const unSet = () => {
      console.log('Show me error data 1.0 =>', data);
      setErrors(prevState => ({
        ...prevState,
          [input_name]: false
      })); 
    }
    
    if(input_name === "max_flow_rate" && input_value > 24999){
      set()
    } else if(errors[input_name]) {
      unSet()
    }

    if(input_name === "max_gas_temp" && input_value > 250){
      set()
    } else if(errors[input_name]) {
      unSet()
    }
  }

  // console.log('Show me the data velocity 1.0 =>', velocityCalculator())

  var title = 'Process Parameters / (Velocity Calculator)';
  if (isMobile) {
    if(title.length > 18) title = title.substring(0,18) + '...';
  }

  const { max_flow_rate, max_gas_temp, min_gas_pressure } = errors;
  const error_values = { max_flow_rate, max_gas_temp, min_gas_pressure }

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
            <FlowRate
              MakeChangeText={MakeChangeText}
              MakeChangeDropdown={MakeChangeDropdown}
              CheckErrors={CheckErrors}
              ErrorValues={error_values}
              changeFlowRateValue={changeFlowRateValue}
            />
            <Gas
              MakeChangeText={MakeChangeText}
              MakeChangeDropdown={MakeChangeDropdown}
              CheckErrors={CheckErrors}
              ErrorValues={error_values}
            />
            <Ambient
              MakeChangeText={MakeChangeText}
              MakeChangeDropdown={MakeChangeDropdown}
            />
            <Pressure
              MakeChangeText={MakeChangeText}
              MakeChangeDropdown={MakeChangeDropdown}
            />

            {calculatorError? (
              <p className="text-center inputErrorTextbox customizerInputTitleSmall">
                Please input maximum flowrate above.
              </p>
            ) : (<> </>)}
            <Row>
              <Col className="processParametterCols">
                <Button
                  color="warning"
                  size="lg"
                  href="#pablo"
                  onClick={ (e) => velocityCalculator({
                    flowrate: 35
                  }, e)}
                >
                  Calculate Velocity
                </Button>
              </Col>
              <Col className="processParametterCols">
                <span className="customizerInputTitleProcessParameters"> Area (Square Feet)</span>
                  <Button className="questionToolTip" id="CalArea" size="sm">
                      ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="bottom" target="CalArea" delay={0}>
                    Area in based on given pipe size in pipe information. <br />
                    { givenPipeSize }"
                  </UncontrolledTooltip>
                <br />
                <h2 className="text-centerl">
                  {calculatorStatus? (velocityCalculatorValues.area) : (<></>)}
                </h2>
              </Col>
              <Col className="processParametterCols">
                <span className="customizerInputTitleProcessParameters">Velocity (CFS)</span>
                  <Button className="questionToolTip" id="CalVelocity" size="sm">
                      ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="bottom" target="CalVelocity" delay={0}>
                    Velocity is based on given Maximum Flow Rate above. <br />
                    { givenFlowRate }
                  </UncontrolledTooltip>
                <br />
                <h2 className="text-centerl">
                  {calculatorStatus? (velocityCalculatorValues.velocity) : (<></>)}
                </h2>
              </Col>
              <Col className="processParametterCols">
                {calculatorStatus? (
                  <Button
                    color="warning"
                    size="lg"
                    href="#pablo"
                    onClick={ (e) => setCalculatorStatus(false)}
                  >
                    Reset Calculator
                  </Button>
                ) : (<></>)}
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
              <span>
                  <span className="customizerInputTitle">Reference Conditions</span>
                  <Button className="questionToolTip" id="ReferenceConditions" size="sm">
                      ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="ReferenceConditions" delay={0}>
                    EPI uses two industry standard reference conditions to calculate flow.
                  </UncontrolledTooltip>
                </span>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <span className="customizerInputTitleSmallX1">
                      Standard Temperature & Pressure: 70°F and 29.92” Hg
                    </span>
                    <Input
                      defaultChecked
                      onClick={ (e) => MakeChange({
                        section: 'application_information',
                        type: 'reference_conditions',
                        values: ['temperature_70', 'temperature_0', 'other'],
                        price_effect: false,
                        other_select: false
                      }, e)}
                      id="type2"
                      name="type2"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <span className="customizerInputTitleSmallX1">
                      Normal Temperature & Pressure: 0°C and 1.013 Bar Abs.
                    </span>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'application_information',
                        type: 'reference_conditions',
                        values: ['temperature_0', 'temperature_70', 'other'],
                        price_effect: false,
                        other_select: false
                      }, e)}
                      id="type2"
                      name="type2"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>

                <FormGroup check className="form-check-radio">
                  <Label check>
                    <span className="customizerInputTitleSmallX1">
                      Other
                    </span>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'application_information',
                        type: 'reference_conditions',
                        values: ['other', 'temperature_0', 'temperature_70'],
                        price_effect: false,
                        other_select: true
                      }, e)}
                      id="type2"
                      name="type2"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                  <Button className="questionToolTip" id="Other" size="sm">
                    ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="Other" delay={0}>
                    Consult factory for reference conditions not included
                  </UncontrolledTooltip>
                </FormGroup>

                { otherOptions ? (
                  <FormGroup>
                    <Input
                      className="epiInputSize"
                      id="exampleFormControlSelect1"
                      type="select"
                      onChange={ (e) => MakeChangeDropdown({
                        section: 'application_information',
                        type: 'other_temperature',
                        values: [
                          'temperature_21',
                          'temperature_20', 
                          'temperature_0_Hg',
                          'temperature_20kPa',
                          'temperature_0ׄ_1_Bar',
                          'temperature_60_ATM',
                          'temperature_60_Hg',
                        ],
                        price_effect: false,
                        option: e
                      }, e)}
                    >
                      <option value="" selected disabled hidden>Select Other Conditions</option>
                      <option value="temperature_21">21.1°C & 1.01325 BarA</option>
                      <option value="temperature_20">20°C & 1.01325 BarA</option>
                      <option value="temperature_0_Hg">0°C & 760mm Hg</option>
                      <option value="temperature_20kPa">20°C & 101.325 kPa A</option>
                      <option value="temperature_0ׄ_1_Bar">0ׄ°C & 1.000 Bar A</option>
                      <option value="temperature_60_ATM">60°F & 1 ATM</option>
                      <option value="temperature_60_Hg">60°F & 29.92" Hg</option>
                    </Input>
                  </FormGroup>
                ) : (
                  <div></div>
                )}
              </Col>

              <Col>

              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default ProcessParameters;
