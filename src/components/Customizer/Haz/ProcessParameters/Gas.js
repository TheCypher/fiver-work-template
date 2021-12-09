import React from "react";

// reactstrap components
import {
  Button,
  Row,
  Col,
  FormGroup,
  Input,
  UncontrolledTooltip
} from "reactstrap";

function Gas({ MakeChangeText, MakeChangeDropdown, ErrorValues }){
  
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
                Input the minimum gas temperature you expect in the process line. 
                This will help EPI determine the appropriate temperature compensation range for your process.
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
                Input the maximum gas temperature you expect in the process line. 
                This will help EPI determine the appropriate temperature compensation range for your process.
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
                input_name: 'max_gas_temp',
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
                Input your optimal gas temperature. 
                This will serve as a reference point when your meter is calibrated to your gas type.
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
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'gas_units',
                values: ['units'],
                price_effect: false,
                text_input: true,
                option: e
              }, e)}
            >
              <option value="" selected disabled hidden>Units</option>
              <option value="°F">°F</option>
              <option value="°C">°C</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}

export default Gas;
