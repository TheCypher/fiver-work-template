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

function DuctRound({ handleChange }){
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
        <Col className="processParametterCols">
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitleProcessParameters">Outer Diameter (OD)</span>
              <Button className="questionToolTip" id="MaximumFlowRateCalc" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="MaximumFlowRateCalc" delay={0}>
                Input the maximum gas flow rate you expect in the process line. 
                This will serve as a reference point when your meter is calibrated to your gas type, 
                and will serve as the full scale.
              </UncontrolledTooltip>
            </label>
            <Input
                className="epiInputSize"
                id="exampleFormControlSelect1"
                type="number"
                placeholder="Enter Outer Diameter"
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
        </Col>
        <Col className="processParametterCols">
          <FormGroup>
            <label htmlFor="exampleFormControlSelect1">
              <span className="customizerInputTitleProcessParameters">Inner Diameter (ID)</span>
              <Button className="questionToolTip" id="VelocityCalcPipeIdQuestion" size="sm">
                ?
              </Button>{` `}
              <UncontrolledTooltip placement="right" target="VelocityCalcPipeIdQuestion" delay={0}>
                Based on ANSI standard
              </UncontrolledTooltip>
            </label>
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
        </Col>
        <Col className="processParametterCols">
          <label htmlFor="exampleFormControlSelect1">
            <span className="customizerInputTitleProcessParameters">Units</span>
            <Button className="questionToolTip" id="CalcUnits" size="sm">
              ?
            </Button>{` `}
            <UncontrolledTooltip placement="right" target="CalcUnits" delay={0}>
              Unit Information
            </UncontrolledTooltip>
          </label>
          <FormGroup>
            <Input
              className="epiInputSize"
              id="exampleFormControlSelect1"
              type="select"
            >
              <option value="inches">Inches</option>
              <option value="mm">Millimeters</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </>
  );
}

export default DuctRound;
