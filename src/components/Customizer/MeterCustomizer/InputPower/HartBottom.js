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


function HartBottom({ handleChange, value }){
  return (
    <>
      <Row>
        <Col>
          <FormGroup check inline>
            <Label check>
              <span className="customizerInputTitleSmallX1 my-auto">DUAL MECHANICAL RELAYS</span>
              <Input
                disabled
                defaultChecked
                id="certificates_origin"
                name="certificates_origin"
                type="checkbox"
              ></Input>
              <span className="form-check-sign"></span>
              <Button className="questionToolTip my-auto" id="DUALMECHANICALRELAYS12" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="DUALMECHANICALRELAYS12" delay={0}>
                DUAL MECHANICAL RELAYS info needed
              </UncontrolledTooltip>
            </Label>
          </FormGroup>

          <FormGroup check inline>
            <Label check>
              <span className="customizerInputTitleSmallX1 my-auto">RS 232 (R/W)</span>
              <Input
                disabled
                defaultChecked
                id="certificates_origin"
                name="certificates_origin"
                type="checkbox"
              ></Input>
              <span className="form-check-sign"></span>
              <Button className="questionToolTip my-auto" id="RSRW123" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="RSRW123" delay={0}>
                RS 232 (R/W)
              </UncontrolledTooltip>
            </Label>
          </FormGroup>
          <br />

          <FormGroup check inline>
            <Label check>
              <span className="customizerInputTitleSmallX1 my-auto">HART</span>
              <Input
                disabled
                defaultChecked
                id="certificates_origin"
                name="certificates_origin"
                type="checkbox"
              ></Input>
              <span className="form-check-sign"></span>
              <Button className="questionToolTip my-auto" id="RSMODBUSHART" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="RSMODBUSHART" delay={0}>
                HART
              </UncontrolledTooltip>
            </Label>
          </FormGroup>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default HartBottom;
