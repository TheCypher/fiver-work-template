import React from "react";
import { useMediaQuery } from 'react-responsive';


// reactstrap components
import {
  Row,
  Col,
  FormGroup,
  Input,
  Button,
  UncontrolledTooltip
} from "reactstrap";

function DuctRectangular({ handleChange, value }){
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
              <span className="customizerInputTitle">Height</span>
              <Button className="questionToolTip" id="DuctHeight" size="sm">
                  ?
              </Button>{` `}
              <UncontrolledTooltip placement="top" target="DuctHeight" delay={0}>
                Pipe Size Information needed
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlInput1"
              placeholder="Duct Height"
              type="number"
              
            ></Input>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitle">Width</span>
              <Button className="questionToolTip" id="DuctWidth" size="sm">
                  ?
              </Button>{` `}
              <UncontrolledTooltip placement="top" target="DuctWidth" delay={0}>
                Duct Width Information needed
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlInput1"
              placeholder="Duct Width"
              type="number"
              
            ></Input>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1" style={{ 'margin-bottom': '14px', 'margin-top': '10px'}}>
              <span className="customizerInputTitle">Dimention</span>
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
              <option value="" selected disabled hidden>Inches</option>
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
      </Row>

      <Row style={{ 'margin-top': '20px'}}>
        <Col>
          <FormGroup>
            <label htmlFor="exampleFormControlInput1">
              <span className="customizerInputTitle">Duct Wall Thickness</span>
              <Button className="questionToolTip" id="DuctWallThickness" size="sm">
                  ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="DuctWallThickness" delay={0}>
                Duct Wall Thickness Information needed
              </UncontrolledTooltip>
            </label>
            <Input
              className="epiInputSize"
              id="exampleFormControlInput1"
              placeholder="Enter Duct Wall Thickness"
              type="number"
            ></Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitle">Probe Direction</span>
              <Button className="questionToolTip" id="ProbeDirection" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="ProbeDirection" delay={0}>
                Probe Direction Information needed
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
              <option value="" selected disabled hidden>Select Probe Direction</option>
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
      </Row>
    </>
  );
}

export default DuctRectangular;
