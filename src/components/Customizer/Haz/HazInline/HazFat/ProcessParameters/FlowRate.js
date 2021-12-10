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
              <option value="SCFM">SCFM</option>
              <option value="SCFH">SCFH</option>
              <option value="SCFD">SCFD</option>
              <option value="NM3/M">NM3/M</option>
              <option value="NM3/H">NM3/H</option>
              <option value="NM3/D">NM3/D</option>
              <option value="NLPS">NLPS</option>
              <option value="NLPM">NLPM</option>
              <option value="NLPH">NLPH</option>
              <option value="MSCFD">MSCFD</option>
              <option value="MCFD">MCFD</option>
              <option value="MMSCFD">MMSCFD</option>
              <option value="SM3/H">SM3/H</option>
              <option value="SLPM">SLPM</option>
              <option value="LBS/S">LBS/S</option>
              <option value="LBS/M">LBS/M</option>
              <option value="LBS/H">LBS/H</option>
              <option value="LBS/D">LBS/D</option>
              <option value="KG/S">KG/S</option>
              <option value="KG/M">KG/M</option>
              <option value="KG/H">KG/H</option>
              <option value="MT/H">MT/H</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}

export default FlowRate;
