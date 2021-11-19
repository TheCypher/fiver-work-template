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

import ProfibusBottom from "./ProfibusBottom";

function Profibus({ handleChange, value }){
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
                  type: 'profibus_ma_flow',
                  values: ['self', 'isolated'],
                  price_effect: false
                },e)
              }
                id="profibus_ma_flow"
                name="profibus_ma_flow"
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
                  type: 'profibus_ma_flow',
                  values: ['isolated', 'self'],
                  price_effect: false
                },e)
              }
                id="profibus_ma_flow"
                name="profibus_ma_flow"
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
            4-20MA TEMP OUTPUT Information needed
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
            <span className="customizerInputTitleSmallX1">VDC FLOW OUTPUT</span>
            <Button className="questionToolTip" id="VDCFLOWOUTPUT" size="sm">
                ?
            </Button>{` `}
            <UncontrolledTooltip placement="top" target="VDCFLOWOUTPUT" delay={0}>
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
                  type: 'profibus_vdc_flow',
                  values: ['5', '10'],
                  price_effect: false
                },e)
              }
                id="profibus_vdc_flow"
                name="profibus_vdc_flow"
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
                  type: 'profibus_vdc_flow',
                  values: ['10', '5'],
                  price_effect: false
                },e)
              }
                id="profibus_vdc_flow"
                name="profibus_vdc_flow"
                type="radio"
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
              VDC TEMP OUTPUT Information needed
            </UncontrolledTooltip>
          </span>
          <FormGroup check className="form-check-radio">
            <Label check>
              <span className="customizerInputTitleSmallX1">0-5</span>
              <Input
                defaultChecked
                onClick={ (e) => handleChange({
                  section: 'input_power_communication',
                  type: 'profibus_vdc_temp',
                  values: ['5', '10'],
                  price_effect: false
                },e)
              }
                id="profibus_vdc_temp"
                name="profibus_vdc_temp"
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
                  type: 'profibus_vdc_temp',
                  values: ['10', '5'],
                  price_effect: false
                },e)
              }
                id="profibus_vdc_temp"
                name="profibus_vdc_temp"
                type="radio"
              ></Input>
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <hr />
      <ProfibusBottom />
    </>
  );
}

export default Profibus;
