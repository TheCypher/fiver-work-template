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
                This configuration includes dual 2 Amp programmable dry-contact mechanical relays.  
                Common uses include low alarm, high alarm, totalized output by pulse, etc.              </UncontrolledTooltip>
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
                RS232 (Recommended Standard 232C, Read / Write) is a standard protocol used for serial communication. 
                It is used for connecting computer and its peripheral devices to allow data exchange between them. 
                It is used in serial communication up to 50 feet with the rate of 1.492kbps, depending on the application environment. 
                EPI recommends the shortest cable distance to minimize signal interference and maximize data transmission speed.
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
                HART (Highway Addressable Remote Transducer, Read Only) Protocol is an open standard used globally to send and receive digital 
                information using analog wiring between smart devices and control systems. With over 30 million devices installed, it is the most 
                popular protocol used in the field. Maintained by an independent organization, the HART Communication Foundation, the HART protocol 
                is an industry standard developed to define the communications protocol between intelligent field devices and a control system.         
                EPI's HART™ compatible module provides real-time information about the operational parameters of the meter. 
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
