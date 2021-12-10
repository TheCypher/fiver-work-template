import React from "react";

// reactstrap components
import {
  Row,
  Col,
  FormGroup,
  Input,
  Label
} from "reactstrap";

function DuctShape({ handleChange, value, setDuctShape }){
  const MakeChange = (data) => {
    handleChange(data);
  }

  return (
    <>
      <span>
        Duct Shape  
      </span>
      <FormGroup check className="form-check-radio">
        <Label check>
          <Row>
            <Col>
              Rectangular
            </Col>
          </Row>
          <Input
            defaultChecked
            onClick={ (e) => MakeChange({
              section: 'pipe_infornation',
              type: 'duct_shape',
              values: ['rectangular', 'round'],
              price_effect: false
            },
            setDuctShape('rectangular'),
            e)}
            id="duct_shape"
            name="duct_shape"
            type="radio"
          ></Input>
          <span className="form-check-sign"></span>
        </Label>
      </FormGroup>
      <FormGroup check className="form-check-radio">
        <Label check>
          <Row>
            <Col>
              Round
            </Col>
          </Row>
          <Input
            onClick={ (e) => MakeChange({
              section: 'pipe_infornation',
              type: 'duct_shape',
              values: ['round', 'rectangular'],
              price_effect: false
            },
            setDuctShape('round'),
            e)}
            id="duct_shape"
            name="duct_shape"
            type="radio"
          ></Input>
          <span className="form-check-sign"></span>
        </Label>
      </FormGroup><br />
    </>
  );
}

export default DuctShape;
