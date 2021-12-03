import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  UncontrolledTooltip
} from "reactstrap";

function FlowRate({ MakeChangeText, MakeChangeDropdown, CheckErrors, ErrorValues, changeFlowRateValue }){
  
  const CheckAndMakeChange = (data) => {
    data.input_value = data.option.target.value;
    CheckErrors(data)

    if(data.values[0] === 'maximum'){changeFlowRateValue(data.input_value)}

    if(!ErrorValues[data.input_name]){
      MakeChangeText(data)
    }
  }
  
  return (
    <>
      {ErrorValues.max_flow_rate &&
        <p className="text-center inputErrorTextbox customizerInputTitleSmallX1">
          Warning! Flow rate needs to be less than 25,000 SFPM for Carbon Dioxide (CO2).
        </p>
      }
      <Row>
        <Col className="processParametterCols">
        <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitleProcessParameters">Minimum Flow Rate</span>
              <Button className="questionToolTip" id="MinimumFlowRate" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="MinimumFlowRate" delay={0}>
                Input the minimum gas flow rate you expect in the process line. 
                This will serve as a reference point when your meter is calibrated to your gas type. 
                As a standard reference, all flow rates start at no flow (0).
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="number"
              placeholder="Minimum Flow Rate"
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'flow_rate_minimum',
                values: ['minimum'],
                price_effect: false,
                text_input: true,
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
              <Button className="questionToolTip" id="MaximumFlowRate" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="MaximumFlowRate" delay={0}>
                Input the maximum gas flow rate you expect in the process line. 
                This will serve as a reference point when your meter is calibrated to your gas type, 
                and will serve as the full scale.
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="number"
              placeholder="Maximum Flow Rate"
              onChange={ (e) => CheckAndMakeChange({
                section: 'process_parameters',
                type: 'flow_rate_maximum',
                values: ['maximum'],
                price_effect: false,
                text_input: true,
                input_name: 'max_flow_rate',
                option: e
              }, e)}
            >
            </Input>
          </FormGroup>
        </Col>

        <Col className="processParametterCols">
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitleProcessParameters">OPTIMAL FLOW RATE</span>
              <Button className="questionToolTip" id="OPTIMALFLOWRATE" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="OPTIMALFLOWRATE" delay={0}>
                Input your optimal gas flow rate. 
                This will serve as a reference point when your meter is calibrated to your gas type. 
                This is usually between 50-80% of your specified flow range.
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="text"
              placeholder="Optimal Flow Rate"
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'flow_rate_optimal',
                values: ['optimal'],
                price_effect: false,
                text_input: true,
                option: e
              }, e)}
            >
            </Input>
          </FormGroup>
        </Col>

        <Col className="processParametterCols">
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitleProcessParameters">Units</span>
              <Button className="questionToolTip" id="UnitsFLOWRATE" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="UnitsFLOWRATE" delay={0}>
                Units
              </UncontrolledTooltip>
              </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="select"
              onChange={ (e) => MakeChangeDropdown({
                section: 'process_parameters',
                type: 'flow_rate_units',
                values: [
                  '1.5',
                  '0.75',
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
              <option value="" selected disabled hidden>Units</option>
              <option value="1.5">Size 1</option>
              <option value="0.75">Size 2</option>
              <option value="1">Size 3</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}

export default FlowRate;
