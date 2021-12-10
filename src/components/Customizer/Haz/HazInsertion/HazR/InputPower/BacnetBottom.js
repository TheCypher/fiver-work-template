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


function BacnetBottom({ handleChange, value }){
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
              <Button className="questionToolTip my-auto" id="DUALMECHANICALRELAYS12534" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="DUALMECHANICALRELAYS12534" delay={0}>
                This configuration includes dual 2 Amp programmable dry-contact mechanical relays.  
                Common uses include low alarm, high alarm, totalized output by pulse, etc.
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
              <Button className="questionToolTip my-auto" id="RSRW12323" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="RSRW12323" delay={0}>
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
              <span className="customizerInputTitleSmallX1 my-auto">RS 485/BACNET</span>
              <Input
                disabled
                defaultChecked
                id="certificates_origin"
                name="certificates_origin"
                type="checkbox"
              ></Input>
              <span className="form-check-sign"></span>
              <Button className="questionToolTip my-auto" id="RSMODBUSHART455" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="RSMODBUSHART455" delay={0}>
                BACnet (Building Automation and Control Network, Read Only) is a communications protocol that defines the services used to 
                communicate between building automation end-devices and building control systems. 
                The BACnet protocol specification like all protocol specification defines both how data is represented on the network 
                and the services that are used to move data from one BACnet node to another.     
                EPI's BACnet™ compatible module provides real-time information about the operational parameters of the meter. 
              </UncontrolledTooltip>
            </Label>
          </FormGroup>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default BacnetBottom;
