import React from "react";

// reactstrap components
import {
  Button,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  UncontrolledTooltip
} from "reactstrap";

function PipeStandard({ handleChange, value }){
  const MakeChange = (data) => {
    handleChange(data);
  }

  return (
    <>
      <span>
        Pipe Standard
        <Button className="questionToolTip" id="PipeStandard" size="sm">
            ?
        </Button>{` `}
        <UncontrolledTooltip placement="right" target="PipeStandard" delay={0}>
          Pipe Standard Information needed
        </UncontrolledTooltip>  
      </span>
      <FormGroup check className="form-check-radio">
        <Label check>
          <Row>
            <Col>
              ANSI
            </Col>
          </Row>
          <Input
            defaultChecked
            onClick={ (e) => MakeChange({
              section: 'pipe_infornation',
              type: 'pipe_standard',
              values: ['ansi', 'jis', 'din'],
              price_effect: false
            }, e)}
            id="pipe_standard"
            name="pipe_standard"
            type="radio"
          ></Input>
          <span className="form-check-sign"></span>
        </Label>
      </FormGroup>
      <FormGroup check className="form-check-radio">
        <Label check>
          <Row>
            <Col>
              JIS
            </Col>
          </Row>
          <Input
            onClick={ (e) => MakeChange({
              section: 'pipe_infornation',
              type: 'pipe_standard',
              values: ['jis', 'ansi', 'din'],
              price_effect: false
            }, e)}
            id="pipe_standard"
            name="pipe_standard"
            type="radio"
          ></Input>
          <span className="form-check-sign"></span>
        </Label>
      </FormGroup>
      <FormGroup check className="form-check-radio">
        <Label check>
          <Row>
            <Col>
              Tube
            </Col>
          </Row>
          <Input
            onClick={ (e) => MakeChange({
              section: 'pipe_infornation',
              type: 'pipe_standard',
              values: ['din', 'ansi', 'jis'],
              price_effect: false
            }, e)}
            id="pipe_standard"
            name="pipe_standard"
            type="radio"
          ></Input>
          <span className="form-check-sign"></span>
        </Label>
      </FormGroup><br />
    </>
  );
}

export default PipeStandard;
