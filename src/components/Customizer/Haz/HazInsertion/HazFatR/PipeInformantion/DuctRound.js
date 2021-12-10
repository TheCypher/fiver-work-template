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

function DuctRound({ handleChange, value }){
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
        <Col className="processParametterCols">
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitle">Outer Dimention (OD)</span>
              <Button className="questionToolTip" id="DuctRoundOuterDiameter" size="sm">
                  ?
              </Button>{` `}
              <UncontrolledTooltip placement="top" target="DuctRoundOuterDiameter" delay={0}>
                Outer Diameter Information needed
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

        <Col className="processParametterCols">
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitle">Inner Dimention (ID)</span>
              <Button className="questionToolTip" id="DuctRoundInnerDiameter" size="sm">
                  ?
              </Button>{` `}
              <UncontrolledTooltip placement="top" target="DuctRoundInnerDiameter" delay={0}>
                Inner Diameter Information needed
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

        <Col className="col-3">
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1" style={{ 'margin-bottom': '14px', 'margin-top': '10px'}}>
              <span className="customizerInputTitle">Units</span>
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
              <option value="" selected disabled hidden>Select Units</option>
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
        <Col className="processParametterCols">
          <FormGroup>
            <label htmlFor="exampleFormControlInput1">
              <span className="customizerInputTitle">Duct Wall Thickness</span>
              <Button className="questionToolTip" id="DuctRoundWallThickness" size="sm">
                  ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="DuctRoundWallThickness" delay={0}>
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
        <Col></Col>
      </Row>
    </>
  );
}

export default DuctRound;
