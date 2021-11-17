import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';

// reactstrap components
import {
  UncontrolledCollapse,
  Button,
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  CardHeader,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Collapse,
  UncontrolledTooltip
} from "reactstrap";

function MountingRequirements({handleChange, value }){
  const [selectFlange, setSelectFlange] = useState(true);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  // collapse states and functions
  const [collapses, setCollapses] = React.useState([0]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };

  const MakeChangeDropdown = (data) => {
    data.option_value = data.option.target.value;
    console.log('Show me Question Or Comments data 1.0 =>', data);
    // const values = data.values;
    // const first_value = values[0]
    
    // if(first_value != data.option_value){
    //   values.removeWithValue(data.option_value)
    //   values[0] = data.option_value;
    //   values.splice(1,0, first_value);
    //   values.join();
    //   data.values = values;
    //   console.log('Show me pipe option data 1.0 =>', data);
    // } else {
    //   console.log('Show me pipe option data 1.0 =>', data);
    // }

    // handleChange(data);
  }

  const MakeChange = (data) => {
    // handleChange(data);
  }

  var title = 'Mounting Requirements';
  if (isMobile) {
    if(title.length > 18) title = title.substring(0,18) + '...';
  }

  return (
    <>
      <Card style={{
        'border-top-left-radius': 'calc(.45rem - 1px)',
        'border-top-right-radius': 'calc(.45rem - 1px)',
        'border-bottom-left-radius': 'calc(.45rem - 1px)',
        'border-bottom-right-radius': 'calc(.45rem - 1px)'
        }}>
        <CardHeader>
          <a
            aria-expanded={collapses.includes(2)}
            data-toggle="collapse"
            href="#pablo"
            onClick={e => {
              e.preventDefault();
              changeCollapse(2);
            }}
          >
            <Navbar className="bg-epi-blue" style={{
              'height': '10px', 'margin-bottom': '5px',
              'border-top-left-radius': 'calc(.45rem - 1px)',
              'border-top-right-radius': 'calc(.45rem - 1px)'
              }} expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()} style={{'font-size': '22px', 'color': 'white'}}>
                    <p>{ title }</p>
                  </NavbarBrand>
                  <button
                    className="navbar-toggler"
                    id="example-navbar-danger"
                    type="button"
                    aria-expanded={collapses.includes(2)}
                    onClick={e => {
                      e.preventDefault();
                      changeCollapse(2);
                    }}
                  >
                    <i className="now-ui-icons arrows-1_minimal-down" style={{'font-size': '22px', 'color': 'white'}}></i>
                  </button>
                </div>
                <UncontrolledCollapse navbar toggler="#example-navbar-danger">
                  <Nav className="ml-auto" navbar style={{'font-size': '22px', 'color': 'white'}}>
                    <i className="now-ui-icons arrows-1_minimal-down"></i>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
          </a>
        </CardHeader>

        <Collapse isOpen={collapses.includes(2)}>
          <CardBody>
          <Row>
              <Col>
                <span className="customizerInputTitle">Mounting Type</span>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <span className="customizerInputTitleSmallX1">MNPT Ends</span>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'meter_orientation',
                        type: 'pipe_orientation',
                        values: ['horizion', 'vertical'],
                        price_effect: false
                      }, e)}
                      id="pipe_orientation"
                      name="pipe_orientation"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <span className="customizerInputTitleSmallX1">Butt End</span>
                    <Input
                      defaultChecked
                      onClick={ (e) => MakeChange({
                        section: 'meter_orientation',
                        type: 'pipe_orientation',
                        values: ['vertical', 'horizion'],
                        price_effect: false
                      }, e,
                      setSelectFlange(false)
                      )
                    }
                      id="pipe_orientation"
                      name="pipe_orientation"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <span className="customizerInputTitleSmallX1">Flange</span>
                    <Input
                      defaultChecked
                      onClick={ (e) => MakeChange({
                        section: 'meter_orientation',
                        type: 'pipe_orientation',
                        values: ['vertical', 'horizion'],
                        price_effect: false
                      }, e,
                      setSelectFlange(true)
                      )}
                      id="pipe_orientation"
                      name="pipe_orientation"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <label htmlFor="exampleFormControlSelect1">
                    Image here
                  </label>
                </FormGroup>
              </Col>
            </Row>

            {selectFlange? (
              <hr />
            ) : (
              <></>
            )}

            <Row>
              <Col>
                  {selectFlange? (
                    <FormGroup>
                      <label htmlFor="exampleFormControlSelect1">
                        <span className="customizerInputTitle">Flange Type</span>
                        <Button className="questionToolTip" id="FlangType" size="sm">
                          ?
                        </Button>{` `}
                        <UncontrolledTooltip placement="right" target="FlangType" delay={0}>
                          Select Flange Type
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
                        <option value="" selected disabled hidden>Select Flange Type</option>
                        <option value="1.5">Flange 1</option>
                        <option value="0.75">Flange 2</option>
                        <option value="1">Flange 3</option>
                      </Input>
                      <br />

                      <label htmlFor="exampleFormControlSelect1">
                        <span className="customizerInputTitle">Flange Size</span>
                        <Button className="questionToolTip" id="FlangSize" size="sm">
                          ?
                        </Button>{` `}
                        <UncontrolledTooltip placement="right" target="FlangSize" delay={0}>
                          Select Flange Size
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
                        <option value="" selected disabled hidden>Select Flange Type</option>
                        <option value="1.5">Size 1</option>
                        <option value="0.75">Size 2</option>
                        <option value="1">Size 3</option>
                      </Input>
                    </FormGroup>
                  ) : (
                    <></>
                  )}
              </Col>
              <Col></Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default MountingRequirements;
