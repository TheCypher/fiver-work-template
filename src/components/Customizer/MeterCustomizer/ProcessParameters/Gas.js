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

function Gas({ MakeChangeText, MakeChangeDropdown }){
  return (
    <>
      <Row>
        <Col className="processParametterCols">
        <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitleProcessParameters">MINIMUM GAS TEMP.</span>
              <Button className="questionToolTip" id="MINIMUMGASTEMP" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="MINIMUMGASTEMP" delay={0}>
                MINIMUM GAS TEMP.
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="text"
              placeholder="Minimum Temp"
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'gas_minimum',
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
              <span className="customizerInputTitleProcessParameters">MAXIMUM GAS TEMP.</span>
              <Button className="questionToolTip" id="MAXIMUMGASTEMP" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="MAXIMUMGASTEMP" delay={0}>
                MAXIMUM GAS TEMP.
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="text"
              placeholder="Maximum Temp"
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'gas_maximum',
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
              <span className="customizerInputTitleProcessParameters">OPTIMAL GAS TEMP.</span>
              <Button className="questionToolTip" id="OPTIMALGASTEMP" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="OPTIMALGASTEMP" delay={0}>
                OPTIMAL GAS TEMP.
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="text"
              placeholder="Optimal Temp"
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'gas_optimal',
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
              <Button className="questionToolTip" id="UnitsGAS" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="UnitsGAS" delay={0}>
                Units Gas
              </UncontrolledTooltip>
              </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="select"
              onChange={ (e) => MakeChangeDropdown({
                section: 'process_parameters',
                type: 'gas_units',
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

export default Gas;