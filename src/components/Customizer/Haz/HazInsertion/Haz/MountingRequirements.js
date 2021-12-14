import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';

// reactstrap components
import {
  UncontrolledCollapse,
  Button,
  Card,
  CardBody,
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

function MountingRequirements({handleChange, pipeInfoPipeSize, value }){
  const [selectFlange, setSelectFlange] = useState(true);
  const [otherFlange, setOtherFlange] = useState(false);
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

    (data.option_value === 'other') ? setOtherFlange(true) : setOtherFlange(false);

    handleChange(data);
  }

  const MakeChangeText = (data) => {
    data.option_value = data.option.target.value;
    handleChange(data);
  }

  const MakeChange = (data) => {
    handleChange(data);
  }

  var title = 'Mounting Options';
  if (isMobile) {
    if(title.length > 18) title = title.substring(0,18) + '...';
  }
  
  console.log('Show me the pipe size for flange 1.0 =>', pipeInfoPipeSize);

  var flangeSelected = false;
  if(pipeInfoPipeSize > 3){
    flangeSelected = true;
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
                    <span className="customizerInputTitleSmallX1">Compression Fitting</span>
                    <Input
                      disabled={flangeSelected}
                      onClick={ (e) => MakeChange({
                          section: 'mounting_options',
                          type: 'mounting_types',
                          values: ['compression_fitting', 'ball_valve', 'welded_flange'],
                          price_effect: false
                        },
                        e,
                        setSelectFlange(false)
                      )}
                      id="mounting_types"
                      name="mounting_types"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <span className="customizerInputTitleSmallX1">Ball Valve Retractor - (requires a minimum of 18” Probe Support)</span>
                    <Input
                      disabled={flangeSelected}
                      onClick={ (e) => MakeChange({
                          section: 'mounting_options',
                          type: 'mounting_types',
                          values: ['ball_valve', 'compression_fitting', 'welded_flange'],
                          price_effect: false
                        },
                        e,
                        setSelectFlange(false)
                      )}
                      id="mounting_types"
                      name="mounting_types"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <span className="customizerInputTitleSmallX1">Welded Flange</span><br />
                    {
                      flangeSelected? (
                        <span className="customizerInputTitleSmallX1">
                        (3” 4” selections only available with flange end connection)
                        </span>
                      ) : (<></>)
                    }
                    <Input
                      defaultChecked
                      onClick={ (e) => MakeChange({
                        section: 'mounting_options',
                        type: 'mounting_types',
                        values: ['welded_flange', 'ball_valve', 'compression_fitting'],
                        price_effect: false
                      }, e,
                      setSelectFlange(true)
                      )}
                      id="mounting_types"
                      name="mounting_types"
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
                  {selectFlange && (
                    <FormGroup>
                      <br />
                      <span>Pipe OD to face of flange</span>
                      <Input
                        className="epiInputSize"
                        id="exampleFormControlSelect1"
                        type="number"
                        placeholder="Enter pipe outer diameter"
                        onChange={ (e) => MakeChangeText({
                          section: 'mounting_options',
                          type: 'flange_pipe_od',
                          values: ['size'],
                          price_effect: false,
                          text_input: true,
                          option: e
                        }, e)}
                      >
                      </Input>
                      <br />
                    </FormGroup>
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
