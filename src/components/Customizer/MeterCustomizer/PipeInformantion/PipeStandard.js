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
        <span className="customizerInputTitle">Pipe Standard</span>
      </span>
      <FormGroup check className="form-check-radio">
        <Label check>
          <span className="customizerInputTitleSmallX1">ANSI</span>
          <Input
            disabled
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
          <span className="customizerInputTitleSmallX1">SCHEDULE 40</span>
          <Input
            disabled
            defaultChecked
            onClick={ (e) => MakeChange({
              section: 'pipe_infornation',
              type: 'pipe_standard',
              values: ['ansi', 'jis', 'din'],
              price_effect: false
            }, e)}
            id="pipe_standard_schedule"
            name="pipe_standard_schedule"
            type="radio"
          ></Input>
          <span className="form-check-sign"></span>
        </Label>
      </FormGroup>
      
      {
        /**
          <FormGroup check className="form-check-radio">
            <Label check>
              <span className="customizerInputTitleSmallX1">JIS</span>
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
              <span className="customizerInputTitleSmallX1">Tube</span>
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
         */
      }
    </>
  );
}

export default PipeStandard;
