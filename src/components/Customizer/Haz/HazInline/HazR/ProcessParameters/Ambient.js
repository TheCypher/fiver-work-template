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

function Ambient({ MakeChangeText, MakeChangeDropdown }){
  return (
    <>
      <Row>
        <Col className="processParametterCols">
        <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitleProcessParameters">MINIMUM AMBIENT TEMP.</span>
              <Button className="questionToolTip" id="MINIMUMAMBIENTTEMP" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="MINIMUMAMBIENTTEMP" delay={0}>
                Input the minimum ambient temperature you expect in the process line. 
                This ensures that the meter electronics will be able to operate within the specified parameters.
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="text"
              placeholder="Minimum Temp"
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'ambient_minimum',
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
              <span className="customizerInputTitleProcessParameters">MAXIMUM AMBIENT TEMP.</span>
              <Button className="questionToolTip" id="MAXIMUMAMBIENTTEMP" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="MAXIMUMAMBIENTTEMP" delay={0}>
                Input the maximum ambient temperature you expect in the process line. 
                This ensures that the meter electronics will be able to operate within the specified parameters.
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="text"
              placeholder="Maximum Temp"
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'ambient_maximum',
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
              <span className="customizerInputTitleProcessParameters">OPTIMAL AMBIENT TEMP.</span>
              <Button className="questionToolTip" id="OPTIMALAMBIENTTEMP" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="OPTIMALAMBIENTTEMP" delay={0}>
                Input your optimal ambient temperature. 
                This ensures that the meter electronics will be able to operate within the specified parameters.
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="text"
              placeholder="Optimal Temp"
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'ambient_optimal',
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
              <Button className="questionToolTip" id="UnitsAMBIENT" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="UnitsAMBIENT" delay={0}>
                Units AMBIENT
              </UncontrolledTooltip>
              </label>
              <Input
                className="epiInputSize"
                id="exampleFormControlSelect1"
                type="select"
                onChange={ (e) => MakeChangeText({
                  section: 'process_parameters',
                  type: 'ambient_units',
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

export default Ambient;
