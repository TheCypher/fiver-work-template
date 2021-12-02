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

function Pressure({ MakeChangeText, MakeChangeDropdown }){
  return (
    <>
      <Row>
        <Col className="processParametterCols">
        <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitleProcessParameters">MINIMUM GAS PRESSURE</span>
              <Button className="questionToolTip" id="MINIMUMGASPRESSURE" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="MINIMUMGASPRESSURE" delay={0}>
                Input the minimum gas pressure you expect in the process line. 
                This will serve as a reference point when your meter is calibrated to your gas type.
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="text"
              placeholder="Minimum Pressure"
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'pressure_minimum',
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
              <span className="customizerInputTitleProcessParameters">MAXIMUM GAS PRESSURE</span>
              <Button className="questionToolTip" id="MAXIMUMGASPRESSURE" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="MAXIMUMGASPRESSURE" delay={0}>
                Input the maximum gas pressure you expect in the process line. 
                This will serve as a reference point when your meter is calibrated to your gas type.
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="text"
              placeholder="Maximum Pressure"
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'pressure_maximum',
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
              <span className="customizerInputTitleProcessParameters">OPTIMAL GAS PRESSURE</span>
              <Button className="questionToolTip" id="OPTIMALGASPRESSURE" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="OPTIMALGASPRESSURE" delay={0}>
                Input your optimal gas pressure. 
                This will serve as a reference point when your meter is calibrated to your gas type.
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="text"
              placeholder="Optimal Pressure"
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'pressure_optimal',
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
              <Button className="questionToolTip" id="UnitsPRESSURE" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="UnitsPRESSURE" delay={0}>
                PRESSURE Units
              </UncontrolledTooltip>
              </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="select"
              onChange={ (e) => MakeChangeDropdown({
                section: 'process_parameters',
                type: 'pressure_units',
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

export default Pressure;
