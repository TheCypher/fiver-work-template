import React, {useState, useEffect} from 'react';

import {
  Button,
  Row,
  Col,
  FormGroup,
  Input,
  UncontrolledTooltip
} from "reactstrap";

function VelocityCalculator({selectedPipeSize}){
  const [givenFlowRate, setGivenFlowRate] = useState(0);
  const [calculatorStatus, setCalculatorStatus] = useState(false);
  const [calculatorError, setCalculatorError] = useState(false);
  const [flowrateError, setFlowrateError] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState('inches');
  const [selectedDiameterData, setSelectedDiameterData] = useState({
    inches: false,
    mm: false
  });
  const [velocityCalculatorValues, setVelocityCalculatorValues] = useState({
    area: 0,
    velocity: 0
  });

  // console.log('Show me pipe size in calculator selectedDiameter 1.0.1 =>', selectedPipeSize);
  useEffect(() => {
    setSelectedDiameterData(prevState => ({
      ...prevState,
        ['inches']: selectedPipeSize,
        ['mm']: selectedPipeSize * 25.4
    }));
  }, [selectedPipeSize])

  const MakeChangeCalculatorValues = (data) => {
    const type = data.type;
    if(type === 'flow_rate'){
      const flowrate = data.option.target.value;
      if(selectedPipeSize == 0.25 || selectedPipeSize == 0.375 || selectedPipeSize == 0.5){
        if(flowrate > 30000){
          setFlowrateError('Flow Limit: ¼” – ½”: 0-30,000 SFPM (141 NMPS)');
        } else {
          setFlowrateError(false);
        }
      } else {
        if(flowrate > 60000){
          setFlowrateError('Flow Limit: ¾” – 4”: 0-60,000 SFPM (283 NMPS)');
        } else {
          setFlowrateError(false);
        }
      }
      setGivenFlowRate(data.option.target.value);
    }
  }
  
  const calculator = () => {    
    const diameter = selectedDiameterData[selectedUnit];
    const flowrate = givenFlowRate;
    
    
    // console.log('Show me pipe size in calculator 1.0.1 =>', diameter, flowrate);
    const diameterToFeets = (diameter / 12);
    const radius = (diameterToFeets / 2);
    var area = (3.14159265359 * (radius ** 2));
    var velocity = (flowrate / area); // cubic feet per second

    var area = area.toFixed(4);
    var velocity = velocity.toFixed(2);

    if(flowrate > 0 && diameter > 0){
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
            className={flowrateError? ('disabled') : ('')}
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
              <option value="inches">Inches and SCFM</option>
              <option value="mm">Millimeters and NM3/HR</option>
            </Input>
          </FormGroup>
        </Col>
        <Col className="processParametterCols">
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitleProcessParameters">Pipe Diameter (ID)</span>
              <Button className="questionToolTip" id="VelocityCalcPipeIdQuestion" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="VelocityCalcPipeIdQuestion" delay={0}>
                Based on ANSI standard
              </UncontrolledTooltip>
            </label>
            <Input
              disabled
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="number"
              value={selectedDiameterData[selectedUnit]}
              placeholder="Pipe Diameter"
              onChange={ (e) => MakeChangeCalculatorValues({
                type: 'pipe_diameter',
                option: e
              }, e)}
              style={{'background-color': '#EBF2FF'}}
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
          { flowrateError }
        </Col>
      </Row>

      {calculatorError? (
        <p className="text-center inputErrorTextbox customizerInputTitleSmall">
          Maximum Flow Rate can not be 0.
        </p>
      ) : (<> </>)}
      
      <CalculatorResults />
    </>
  );
}

export default VelocityCalculator;