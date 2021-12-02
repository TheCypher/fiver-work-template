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


function StandardBottom({ handleChange, value }){

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
              <Button className="questionToolTip my-auto" id="DUALMECHANICALRELAYS" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="DUALMECHANICALRELAYS" delay={0}>
                This configuration includes dual 2 Amp programmable dry-contact mechanical relays.  
                Common uses include low alarm, high alarm, totalized output by pulse, etc.
              </UncontrolledTooltip>
            </Label>
          </FormGroup>

          <FormGroup check inline>
            <Label check>
              <span className="customizerInputTitleSmallX1 my-auto">RS 485/MODBUS (R/W)</span>
              <Input
                disabled
                defaultChecked
                id="certificates_origin"
                name="certificates_origin"
                type="checkbox"
              ></Input>
              <span className="form-check-sign"></span>
              <Button className="questionToolTip my-auto" id="RSMODBUS" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="RSMODBUS" delay={0}>
                RS-485 (Read / Write) is an industrial specification that defines the electrical interface 
                and physical layer for point-to-point communication of electrical devices. 
                The RS-485 standard allows for long cabling distances in electrically noisy 
                environments and can support multiple devices on the same bus. 
                In addition, the noise immunity offered by the RS-485 standard makes the interface very versatile.     
                Modbus is a communication protocol developed by Modicon systems. 
                In simple terms, it is a method used for transmitting information over serial lines between electronic devices. 
                The device requesting the information is called the Modbus Master and the devices supplying information are Modbus Slaves. 
                In a standard Modbus network, there is one Master and up to 247 Slaves (flow meters, for example), each with a unique address from 1 to 247. 
                The Master can also write information to the Slaves. 
                EPI flow meters can be configured to most industry standard baud rates and parity, 
                and can be changed in the field if required using EPI communication software or using the meter keypad.
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
              <Button className="questionToolTip my-auto" id="RSRW" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="RSRW" delay={0}>
                RS232 (Recommended Standard 232C, Read / Write) is a standard protocol used for serial communication. 
                It is used for connecting computer and its peripheral devices to allow data exchange between them. 
                It is used in serial communication up to 50 feet with the rate of 1.492kbps, depending on the application environment. 
                EPI recommends the shortest cable distance to minimize signal interference and maximize data transmission speed.
              </UncontrolledTooltip>
            </Label>
          </FormGroup>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default StandardBottom;
