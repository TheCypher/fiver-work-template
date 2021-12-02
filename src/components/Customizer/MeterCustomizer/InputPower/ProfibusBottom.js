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


function ProfibusBottom({ handleChange, value }){
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
              <Button className="questionToolTip my-auto" id="DUALMECHANICALRELAYS12PROFIBUS" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="DUALMECHANICALRELAYS12PROFIBUS" delay={0}>
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
              <Button className="questionToolTip my-auto" id="RSRW123PROFIBUS" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="RSRW123PROFIBUS" delay={0}>
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
              <span className="customizerInputTitleSmallX1 my-auto">PROFIBUS</span>
              <Input
                disabled
                defaultChecked
                id="certificates_origin"
                name="certificates_origin"
                type="checkbox"
              ></Input>
              <span className="form-check-sign"></span>
              <Button className="questionToolTip my-auto" id="RSMODBUSHARTPROFIBUS" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="RSMODBUSHARTPROFIBUS" delay={0}>
                PROFIBUS (Read Only) is an open field, supplier-independent network standard, 
                whose interface permits a vast application in processes, manufacture and building automation. 
                This standard complies with EN 50170 e EN 50254 standards.     
                EPI's Profibus™ compatible protocol provides real-time information about the operational parameters of the meter. 
              </UncontrolledTooltip>
            </Label>
          </FormGroup>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default ProfibusBottom;
