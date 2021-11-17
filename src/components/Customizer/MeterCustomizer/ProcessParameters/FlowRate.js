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

function FlowRate({ MakeChangeText, MakeChangeDropdown }){
  
  return (
    <>
      <Row>
        <Col className="processParametterCols">
        <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitleProcessParameters">Minimum Flow Rate</span>
              <Button className="questionToolTip" id="MinimumFlowRate" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="MinimumFlowRate" delay={0}>
                Minimum Flow Rate
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="text"
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
              Maximum Flow Rate
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="text"
              placeholder="Maximum Flow Rate"
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'flow_rate_maximum',
                values: ['maximum'],
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
              <span className="customizerInputTitleProcessParameters">OPTIMAL FLOW RATE</span>
              <Button className="questionToolTip" id="OPTIMALFLOWRATE" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="OPTIMALFLOWRATE" delay={0}>
                OPTIMAL FLOW RATE
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