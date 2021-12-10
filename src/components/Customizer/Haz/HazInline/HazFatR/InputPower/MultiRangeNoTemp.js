import React from "react";

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

import MultiNoTempBottom from "./MultiNoTempBottom";

function MultiRangeNoTemp({ handleChange, value }){
  return (
    <>
      <p className="text-center inputPowerCommunicationTextbox customizerInputTitleSmallX1">
        Multi-Range allows for up to 4 custom ranges, specified before purchasing. An EPI representative will reach out
        to you to confirm these details after your quote has become finalized.
      </p>
      <Row>
        <Col className="inputPowerCommunicationCols">
          <span>
            <span className="customizerInputTitleSmallX1">4-20MA FLOW OUTPUT</span>
            <Button className="questionToolTip" id="MAFLOWOUTPUT21" size="sm">
                ?
            </Button>{` `}
            <UncontrolledTooltip placement="top" target="MAFLOWOUTPUT21" delay={0}>
            4-20MA FLOW OUTPUT Information needed
            </UncontrolledTooltip>
          </span>
          <FormGroup check className="form-check-radio">
            <Label check>
              <span className="customizerInputTitleSmallX1">Self Powered</span>
              <Input
                defaultChecked
                onClick={ (e) => handleChange({
                  section: 'input_power_communication',
                  type: 'multi_ma_flow',
                  values: ['self', 'isolated'],
                  price_effect: false
                },e)
              }
                id="multi_ma_flow"
                name="multi_ma_flow"
                type="radio"
              ></Input>
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
          <FormGroup check className="form-check-radio">
            <Label check>
              <span className="customizerInputTitleSmallX1">Isolated-loop Powered</span>
              <Input
                onClick={ (e) => handleChange({
                  section: 'input_power_communication',
                  type: 'multi_ma_flow',
                  values: ['isolated', 'self'],
                  price_effect: false
                },e)
              }
                id="multi_ma_flow"
                name="multi_ma_flow"
                type="radio"
              ></Input>
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
        </Col>

        <Col className="inputPowerCommunicationCols">
          <span>
            <span className="customizerInputTitleSmallX1">VDC FLOW OUTPUT</span>
            <Button className="questionToolTip" id="VDCFLOWOUTPUT21" size="sm">
                ?
            </Button>{` `}
            <UncontrolledTooltip placement="top" target="VDCFLOWOUTPUT21" delay={0}>
              VDC FLOW OUTPUT Information needed
            </UncontrolledTooltip>
          </span>
          <FormGroup check className="form-check-radio">
            <Label check>
              <span className="customizerInputTitleSmallX1">0-5</span>
              <Input
                defaultChecked
                onClick={ (e) => handleChange({
                  section: 'input_power_communication',
                  type: 'multi_vdc_flow',
                  values: ['5', '10'],
                  price_effect: false
                },e)
              }
                id="multi_vdc_flow"
                name="multi_vdc_flow"
                type="radio"
              ></Input>
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
          <FormGroup check className="form-check-radio">
            <Label check>
              <span className="customizerInputTitleSmallX1">0-10</span>
              <Input
                onClick={ (e) => handleChange({
                  section: 'input_power_communication',
                  type: 'multi_vdc_flow',
                  values: ['10', '5'],
                  price_effect: false
                },e)
              }
                id="multi_vdc_flow"
                name="multi_vdc_flow"
                type="radio"
              ></Input>
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
        </Col>

        <Col className="inputPowerCommunicationCols">

        </Col>

        <Col className="inputPowerCommunicationCols">

        </Col>
      </Row>
      <hr />
      <MultiNoTempBottom />
    </>
  );
}

export default MultiRangeNoTemp;
