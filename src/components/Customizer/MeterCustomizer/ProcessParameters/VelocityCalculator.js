import React, {useState} from 'react';

import {
  Button,
  Row,
  Col,
  FormGroup,
  Input,
  UncontrolledTooltip
} from "reactstrap";

function VelocityCalculator(customizerData){
  const [givenPipeSize, setGivenPipeSize] = useState(0);
  const [givenFlowRate, setGivenFlowRate] = useState(0);
  const [calculatorStatus, setCalculatorStatus] = useState(false);
  const [calculatorError, setCalculatorError] = useState(false);
  const [velocityCalculatorValues, setVelocityCalculatorValues] = useState({
    area: 0,
    velocity: 0
  });

  const MakeChangeCalculatorValues = (data) => {
    const type = data.type;
    if(type === 'flow_rate'){
      setGivenFlowRate(data.option.target.value);
    }
    
    if(type === 'pipe_diameter'){
      setGivenPipeSize(data.option.target.value);
    }
  }
  
  const calculator = () => {    
    const diameter = givenPipeSize;
    const flowrate = givenFlowRate;
    
    
    console.log('Show me pipe size in calculator 1.0.1 =>', diameter, flowrate);
    const diameterToFeets = (diameter / 12);
    const radius = (diameterToFeets / 2);
    var area = (3.14159265359 * (radius ** 2));
    var velocity = (flowrate / area); // cubic feet per second

    var area = area.toFixed(4);
    var velocity = velocity.toFixed(2);

    if(givenFlowRate > 0 && givenPipeSize > 0){
      setVelocityCalculatorValues(prevState => ({
        ...prevState,
          ['area']: area,
          ['velocity']: velocity
      }));
  
      setCalculatorError(false);
      setCalculatorStatus(true);
    } else {
      setCalculatorStatus(false);
      setCalculatorError(true);
    }
  }

  const resetCalculator = () => {
    setCalculatorStatus(false);
    setGivenPipeSize(0);
    setGivenFlowRate(0);
  }

  const CalculatorResults = () => {
    if(calculatorStatus){
      return(
        <>
          <Row>
            <Col>
              {calculatorStatus? (
                <Button
                  color="warning"
                  size="lg"
                  href="#pablo"
                  onClick={ (e) => resetCalculator({}, e)}
                >
                  Reset Calculator
                </Button>
              ) : (<></>)}
            </Col>
            <Col className="processParametterCols"></Col>
            <Col className="processParametterCols">
              <span className="customizerInputTitleProcessParameters"> Area (Square Feet)</span>
              <br />
              <h2 className="text-centerl">
                {velocityCalculatorValues.area}
              </h2>
            </Col>
            <Col className="processParametterCols">
              <span className="customizerInputTitleProcessParameters">Velocity (SFPM)</span>
              <br />
              <h2 className="text-centerl">
                {velocityCalculatorValues.velocity}
              </h2>
            </Col>
          </Row>
        </>
      );
    }

    return(<> </>);
  }
  return(
    <>
      <Row>
        <Col>
          <Button
            color="warning"
            size="lg"
            href="#pablo"
            onClick={ (e) => calculator({}, e)}
          >
            Calculate Velocity
          </Button>
        </Col>
        <Col className="processParametterCols">
          <label htmlFor="exampleFormControlSelect1">
            <span className="customizerInputTitleProcessParameters">Units</span>
            <Button className="questionToolTip" id="CalcUnits" size="sm">
              ?
            </Button>{` `}
            <UncontrolledTooltip placement="right" target="CalcUnits" delay={0}>
              Unit Information
            </UncontrolledTooltip>
          </label>
          <FormGroup>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="select"
            >
              <option value="" selected disabled hidden>Units</option>
              <option value="1.5">Inches and SCFM</option>
              <option value="0.75">Millimeters and NM3/HR</option>
            </Input>
          </FormGroup>
        </Col>
        <Col className="processParametterCols">
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitleProcessParameters">Pipe Diameter (ID)</span>
              <Button className="questionToolTip" id="MaximumFlowRateCalc" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="MaximumFlowRateCalc" delay={0}>
                Input the maximum gas flow rate you expect in the process line. 
                This will serve as a reference point when your meter is calibrated to your gas type, 
                and will serve as the full scale.
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="number"
              value={givenPipeSize}
              placeholder="Pipe Diameter"
              onChange={ (e) => MakeChangeCalculatorValues({
                type: 'pipe_diameter',
                option: e
              }, e)}
            >
            </Input>
          </FormGroup>
        </Col>
        <Col className="processParametterCols">
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitleProcessParameters">Maximum Flow Rate</span>
              <Button className="questionToolTip" id="MaximumFlowRateCalc" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="MaximumFlowRateCalc" delay={0}>
                Input the maximum gas flow rate you expect in the process line. 
                This will serve as a reference point when your meter is calibrated to your gas type, 
                and will serve as the full scale.
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="number"
              value={givenFlowRate}
              placeholder="Maximum Flow Rate"
              onChange={ (e) => MakeChangeCalculatorValues({
                type: 'flow_rate',
                option: e
              }, e)}
            >
            </Input>
          </FormGroup>
        </Col>
      </Row>

      {calculatorError? (
        <p className="text-center inputErrorTextbox customizerInputTitleSmall">
          Please input Pipe Diameter & Maximum Flow Rate above.
        </p>
      ) : (<> </>)}
      
      <CalculatorResults />
    </>
  );
}

export default VelocityCalculator;