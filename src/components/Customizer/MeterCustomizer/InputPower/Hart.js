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

import HartBottom from "./HartBottom";

function Hart({ handleChange, value }){
  return (
    <>
      <Row>
        <Col className="inputPowerCommunicationCols">
          <span>
            <span className="customizerInputTitleSmallX1">4-20MA FLOW OUTPUT</span>
            <Button className="questionToolTip" id="MAFLOWOUTPUT" size="sm">
                ?
            </Button>{` `}
            <UncontrolledTooltip placement="top" target="MAFLOWOUTPUT" delay={0}>
              A 4-20mA current loop is a means to pass a “value” like flow using an established electrical current (the loop) 
              as the carrier of this information. Generally, the 4mA represents the minimum value (like 0 for flow); and the 20mA 
              represents the maximum value, or full scale, of the value you are sending.  
              EPI flow meters use this output to represent the flow rate in the process line. 
              We offer Self Powered or Isolated-Loop Powered 4-20mA flow signal; please specify your desired configuration. 
              If you choose the Isolated-Loop Powered option, this does not provide meter power, 
              and will require separate input power for the meter electronics.
            </UncontrolledTooltip>
          </span>
          <FormGroup check className="form-check-radio">
            <Label check>
              <span className="customizerInputTitleSmallX1">Self Powered</span>
              <Input
                defaultChecked
                onClick={ (e) => handleChange({
                  section: 'input_power_communication',
                  type: 'hart_ma_flow',
                  values: ['self', 'isolated'],
                  price_effect: false
                },e)
              }
                id="hart_ma_flow"
                name="hart_ma_flow"
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
                  type: 'hart_ma_flow',
                  values: ['isolated', 'self'],
                  price_effect: false
                },e)
              }
                id="hart_ma_flow"
                name="hart_ma_flow"
                type="radio"
              ></Input>
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
        </Col>

        <Col className="inputPowerCommunicationCols">
          <span>
            <span className="customizerInputTitleSmallX1">4-20MA TEMP OUTPUT</span>
            <Button className="questionToolTip" id="MATEMPOUTPUT" size="sm">
                ?
            </Button>{` `}
            <UncontrolledTooltip placement="top" target="MATEMPOUTPUT" delay={0}>
              A 4-20mA current is a means to pass a “value” like gas temperature using an established 
              electrical current as the carrier of this information. Generally, the 4mA represents 
              the minimum value, and the 20mA represents the maximum value of the reading.  
              EPI flow meters use this output to represent the gas temperature in the process line. 
              This output is Self Powered.
            </UncontrolledTooltip>
          </span>
          <FormGroup check inline>
            <Label check>
              <span className="customizerInputTitleSmallX1">Standard</span>
              <Input
                disabled
                defaultChecked
                id="certificates_origin"
                name="certificates_origin"
                type="checkbox"
              ></Input>
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
        </Col>

        <Col className="inputPowerCommunicationCols">
          <span>
            <span className="customizerInputTitleSmallX1">VDC TEMP OUTPUT</span>
            <Button className="questionToolTip" id="VDCTEMPOUTPUT" size="sm">
                ?
            </Button>{` `}
            <UncontrolledTooltip placement="top" target="VDCTEMPOUTPUT" delay={0}>
              VDC refers to volts of direct current, and it  is provided by the electronics in either the 0-5 or 0-10 VDC gas temperature range.  
              Generally, the 0 VDC represents the minimum value, and the 5 (or 10) VDC represents the maximum value. 
              Please specify which voltage and temperature range you require.
            </UncontrolledTooltip>
          </span>
          <FormGroup check className="form-check-radio">
            <Label check>
              <span className="customizerInputTitleSmallX1">0-5</span>
              <Input
                defaultChecked
                onClick={ (e) => handleChange({
                  section: 'input_power_communication',
                  type: 'hart_vdc_temp',
                  values: ['5', '10'],
                  price_effect: false
                },e)
              }
                id="hart_vdc_temp"
                name="hart_vdc_temp"
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
                  type: 'hart_vdc_temp',
                  values: ['10', '5'],
                  price_effect: false
                },e)
              }
                id="hart_vdc_temp"
                name="hart_vdc_temp"
                type="radio"
              ></Input>
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
        </Col>

        <Col className="inputPowerCommunicationCols">

        </Col>
      </Row>
      <hr />
      <HartBottom />
    </>
  );
}

export default Hart;
