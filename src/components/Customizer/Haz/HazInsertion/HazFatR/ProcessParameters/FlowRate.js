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
              onChange={ (e) => MakeChangeText({
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
              onChange={ (e) => MakeChangeText({
                section: 'process_parameters',
                type: 'flow_rate_units',
                values: ['units'],
                price_effect: false,
                text_input: true,
                option: e
              }, e)}
            >
              <option value="" selected disabled hidden>Units</option>
              <option value="SCFS">SCFS</option>
              <option value="SCFM">SCFM</option>
              <option value="SCFH">SCFH</option>
              <option value="SCFD">SCFD</option>
              <option value="LB/S">LB/S</option>
              <option value="LB/M">LB/M</option>
              <option value="LB/H">LB/H</option>
              <option value="LB/D">LB/D</option>
              <option value="STPM">STPM</option>
              <option value="SCIM">SCIM</option>
              <option value="SCIH">SCIH</option>
              <option value="SFPS">SFPS</option>
              <option value="SFPM">SFPM</option>
              <option value="BTUM">BTUM</option>
              <option value="BTUH">BTUH</option>
              <option value="MCFD">MCFD</option>
              <option value="SLPS">SLPS</option>
              <option value="SLMP">SLPM</option>
              <option value="SLPH">SLPH</option>
              <option value="SCCM">SCCM</option>
              <option value="KG/S">KG/S</option>
              <option value="KG/M">KG/M</option>
              <option value="KG/H">KG/H</option>
              <option value="KG/D">KG/D</option>
              <option value="MTPM">MTPM</option>
              <option value="NMPS">NMPS</option>
              <option value="NMPM">NMPM</option>
              <option value="NMPH">NMPH</option>
              <option value="Nm/s">Nm/s</option>
              <option value="Nm/m">Nm/m</option>
              <option value="Nm/h">Nm/h</option>
              <option value="SCMH">SCMH</option>
              <option value="NLPM">NLPM</option>
              <option value="NLPH">NLPH</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}

export default FlowRate;
