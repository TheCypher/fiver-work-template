import React from "react";
import { useMediaQuery } from 'react-responsive';


// reactstrap components
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledTooltip
} from "reactstrap";

function Pipe({ handleChange, value }){
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const MakeChangeDropdown = (data) => {
    data.option_value = data.option.target.value;
    const values = data.values;
    const first_value = values[0]
    
    if(first_value != data.option_value){
      values.removeWithValue(data.option_value)
      values[0] = data.option_value;
      values.splice(1,0, first_value);
      values.join();
      data.values = values;
      console.log('Show me pipe option data 1.0 =>', data);
    } else {
      console.log('Show me pipe option data 1.0 =>', data);
    }

    handleChange(data);
  }

  Array.prototype.removeWithValue = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
  };


  var title = 'Pipe Information';
  if (isMobile) {
    if(title.length > 18) title = title.substring(0,18) + '...';
  }

  return (
    <>
      <Row>
        <Col>
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              Pipe Size
              <Button className="questionToolTip" id="PipeSize" size="sm">
                  ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="PipeSize" delay={0}>
                Pipe Size Information needed
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="select"
              onChange={ (e) => MakeChangeDropdown({
                section: 'pipe_infornation',
                type: 'pipe_size',
                values: [
                  '1.5',
                  '0.75',
                  '1',
                  '1_0.25',
                  '1_1.5',
                  '2',
                  '2_1.5',
                  '3',
                  '4'
                ],
                price_effect: false,
                option: e
              }, e)}
            >
              <option value="1.5">1.5 in</option>
              <option value="0.75">0.75 in</option>
              <option value="1">1 in</option>
              <option value="1_0.25">1 - 0.25 in</option>
              <option value="1_1.5">1 - 1.5 in</option>
              <option value="2">2 in</option>
              <option value="2_1.5">2 - 1.5 in</option>
              <option value="3">3 in</option>
              <option value="4">4 in</option>
            </Input>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              Schedule
              <Button className="questionToolTip" id="Schedule" size="sm">
                  ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="Schedule" delay={0}>
              Schedule Information needed
              </UncontrolledTooltip>
            </label>
            <Input id="exampleFormControlSelect1" type="select" style={{ 'border-radius': '6px'}}>
              <option>40</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

      <Row style={{ 'margin-top': '20px'}}>
        <Col>
          <FormGroup>
            <label htmlFor="exampleFormControlInput1">
              Inner Diameter (ID)
              <Button className="questionToolTip" id="InnerDiameter" size="sm">
                  ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="InnerDiameter" delay={0}>
              Inner Diameter Information needed
              </UncontrolledTooltip>
            </label>
            <Input
              id="exampleFormControlInput1"
              placeholder="Select Pipe Size & Schedule Above"
              type="number"
              style={{ 'border-radius': '6px', 'background-color': '#EBF2FF'}}
            ></Input>
          </FormGroup>
        </Col>
        <Col className='col-1 my-auto'><br /> in</Col>
      </Row>
    </>
  );
}

export default Pipe;
