import React, { useState } from "react";
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
  const [pipeLength, setPipeLength] = useState(6);
  const [pipeDiameter, setPipeDiameter] = useState(0.540);

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

    if(data.length_change){
      console.log('Show me pipe length data 1.0 =>', pipeLength);
      if(data.option_value === '1/4') {setPipeLength(6); setPipeDiameter(0.540);}
      if(data.option_value === '3/8') {setPipeLength(6); setPipeDiameter(0.675);}
      if(data.option_value === '1/2') {setPipeLength(7); setPipeDiameter(0.840);}
      if(data.option_value === '3/4') {setPipeLength(7); setPipeDiameter(1.050);}
      if(data.option_value === '1') {setPipeLength(8); setPipeDiameter(1.315);}
      if(data.option_value === '1 1/4') {setPipeLength(10); setPipeDiameter(1.660);}
      if(data.option_value === '1 1/2') {setPipeLength(14); setPipeDiameter(1.900);}
      if(data.option_value === '2') {setPipeLength(14); setPipeDiameter(2.375);}
      if(data.option_value === '2 1/2') {setPipeLength(14); setPipeDiameter(2.875);}
      if(data.option_value === '3 Flanged') {setPipeLength(14); setPipeDiameter(3.500);}
      if(data.option_value === '4 Flanged') {setPipeLength(14); setPipeDiameter(4.500);}
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
              <span className="customizerInputTitle">Pipe Size</span>
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
                  '1/4',
                  '3/8',
                  '1/2',
                  '3/4',
                  '1',
                  '1 1/4',
                  '1 1/2',
                  '2',
                  '2 1/2',
                  '3 Flanged',
                  '4 Flanged'
                ],
                price_effect: false,
                length_change: true,
                option: e
              }, e)}
            >
              <option value="1/4">1/4"</option>
              <option value="3/8">3/8"</option>
              <option value="1/2">1/2"</option>
              <option value="3/4">3/4"</option>
              <option value="1">1"</option>
              <option value="1 1/4">1 1/4"</option>
              <option value="1 1/2">1 1/2"</option>
              <option value="2_1.5">2 - 1.5"</option>
              <option value="2">2"</option>
              <option value="2 1/2">2 1/2"</option>
              <option value="3 Flanged">3" Flanged</option>
              <option value="4 Flanged">4" Flanged"</option>
            </Input>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitle">Length</span>
              <Button className="questionToolTip" id="Length" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="Length" delay={0}>
                Length Information needed
              </UncontrolledTooltip>
            </label>
            <Input
              disabled
              id="exampleFormControlInput1"
              value={`${pipeLength}"`}
              type="text"
              style={{ 'border-radius': '6px', 'background-color': '#EBF2FF'}}
            ></Input>
          </FormGroup>
        </Col>
      </Row>

      <Row style={{ 'margin-top': '20px'}}>
        <Col>
          <FormGroup>
            <label htmlFor="exampleFormControlInput1">
              <span className="customizerInputTitle">Inner Diameter (ID)</span>
              <Button className="questionToolTip" id="InnerDiameter" size="sm">
                  ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="InnerDiameter" delay={0}>
              Inner Diameter Information needed
              </UncontrolledTooltip>
            </label>
            <Input
              disabled
              id="exampleFormControlInput1"
              value={`${pipeDiameter}"`}
              type="text"
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
