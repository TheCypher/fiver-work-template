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

function Pipe({ 
  handleChange,
  setSelectedPipeSize,
  pipeDiameter,
  setPipeDiameter,
  pipeDiameterMM,
  setPipeDiameterMM,
  pipeLength,
  setPipeLength
}){
  const [otherPipeSize, setOtherPipeSize] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const MakeChangeDropdown = (data) => {
    data.option_value = data.option.target.value;
    const values = data.values;
    const first_value = values[0]
    
    if(first_value !== data.option_value){
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
      setSelectedPipeSize()
      if(data.option_value == 0.25) {setPipeLength(6); setPipeDiameter(0.364); setPipeDiameterMM(6.35);}
      if(data.option_value == 0.375) {setPipeLength(6); setPipeDiameter(0.498); setPipeDiameterMM(9.525);}
      if(data.option_value == 0.5) {setPipeLength(7); setPipeDiameter(0.622); setPipeDiameterMM(12.70);}
      if(data.option_value == 0.75) {setPipeLength(7); setPipeDiameter(0.824); setPipeDiameterMM(19.05);}
      if(data.option_value == 1) {setPipeLength(8); setPipeDiameter(1.049); setPipeDiameterMM(25.4);}
      if(data.option_value == 1.25) {setPipeLength(10); setPipeDiameter(1.380); setPipeDiameterMM(31.75);}
      if(data.option_value == 1.5) {setPipeLength(14); setPipeDiameter(1.610); setPipeDiameterMM(38.09);}
      if(data.option_value == 2) {setPipeLength(14); setPipeDiameter(2.067); setPipeDiameterMM(50.8);}
      if(data.option_value == 2.5) {setPipeLength(14); setPipeDiameter(2.469); setPipeDiameterMM(63.5);}
      if(data.option_value == 3) {setPipeLength(14); setPipeDiameter(3.068); setPipeDiameterMM(76.19);}
      if(data.option_value == 4) {setPipeLength(14); setPipeDiameter(4.026); setPipeDiameterMM(101.6);}
    }

    (data.option_value === 'other') ? setOtherPipeSize(true) : setOtherPipeSize(false);

    handleChange(data);
  }

  const MakeChangeText = (data) => {
    data.option_value = data.option.target.value;
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
                Based on ANSI standard
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
                  0.25,
                  0.375,
                  0.5,
                  0.75,
                  1,
                  1.25,
                  1.5,
                  2,
                  2.5,
                  3,
                  4
                ],
                price_effect: false,
                length_change: true,
                option: e
              }, e)}
            >
              <option value={0.25}>1/4"</option>
              <option value={0.375}>3/8"</option>
              <option value={0.5}>1/2"</option>
              <option value={0.75}>3/4"</option>
              <option value={1}>1"</option>
              <option value={1.25}>1 1/4"</option>
              <option value={1.5}>1 1/2"</option>
              <option value={2}>2"</option>
              <option value={2.5}>2 1/2"</option>
              <option value={3}>3"</option>
              <option value={4}>4"</option>
              <option value="other">Other Size</option>
            </Input>
          </FormGroup>

          { otherPipeSize ? (
            <FormGroup>
              <Input
                className="epiInputSize"
                id="exampleFormControlSelect1"
                type="number"
                placeholder="Enter Size"
                onChange={ (e) => MakeChangeText({
                  section: 'pipe_infornation',
                  type: 'pipe_size_other',
                  values: ['size'],
                  price_effect: false,
                  text_input: true,
                  option: e
                }, e)}
              >
              </Input>
            </FormGroup>
          ) : (
            <div></div>
          )}
        </Col>

        <Col>
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitle">Length of Flow Section</span>
              <Button className="questionToolTip" id="Length" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="Length" delay={0}>
                Consult factory for custom flow section length
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

          { otherPipeSize ? (
            <FormGroup>
              <Input
                className="epiInputSize"
                id="exampleFormControlSelect1"
                type="number"
                placeholder="Enter Length of flow section"
                onChange={ (e) => MakeChangeText({
                  section: 'pipe_infornation',
                  type: 'pipe_length_other',
                  values: ['length'],
                  price_effect: false,
                  text_input: true,
                  option: e
                }, e)}
              >
              </Input>
            </FormGroup>
          ) : (
            <div></div>
          )}
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
                Based on ANSI standard
              </UncontrolledTooltip>
            </label>
            <Input
              disabled
              id="exampleFormControlInput1"
              value={`${pipeDiameter}" / ${pipeDiameterMM}mm`}
              type="text"
              style={{ 'border-radius': '6px', 'background-color': '#EBF2FF'}}
            ></Input>
          </FormGroup>

          { otherPipeSize ? (
            <FormGroup>
              <Input
                className="epiInputSize"
                id="exampleFormControlSelect1"
                type="number"
                placeholder="Enter inner diameter"
                onChange={ (e) => MakeChangeText({
                  section: 'pipe_infornation',
                  type: 'pipe_inner_diameter_other',
                  values: ['diameter'],
                  price_effect: false,
                  text_input: true,
                  option: e
                }, e)}
              >
              </Input>
            </FormGroup>
          ) : (
            <div></div>
          )}
        </Col>
      </Row>
    </>
  );
}

export default Pipe;
