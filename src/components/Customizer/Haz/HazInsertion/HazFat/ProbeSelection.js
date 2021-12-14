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
  Input,
  CardHeader,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Collapse,
  UncontrolledTooltip
} from "reactstrap";

function ProbeSelection({ handleChange, value }){
  const [selectInputOptions, setSelectInputOptions] = useState(1);
  const [widthSelected, setWidthSelected] = useState(0);
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

  const MakeChangeText = (data) => {
    data.option_value = data.option.target.value;

    if(data.input_name === 'width'){
      setWidthSelected(1);
      if(data.option_value === '1/2'){
        setSelectInputOptions(1)
      } else if(data.option_value === '3/4'){
        setSelectInputOptions(2)
      } else if(data.option_value === '1'){
        setSelectInputOptions(2)
      }
    }
    handleChange(data);
  }

  var title = 'Probe Selection';
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
                <FormGroup>
                  <label htmlFor="exampleFormControlSelect1">
                    <span className="customizerInputTitle">Width</span>
                    <Button className="questionToolTip" id="ApplicationQuestion" size="sm">
                      ?
                    </Button>{` `}
                    <UncontrolledTooltip placement="right" target="ApplicationQuestion" delay={0}>
                      This refers to the application for which you will be using your meter, 
                      including Industrial, Oil & Gas, Wastewater, and Biogas. 
                    </UncontrolledTooltip>
                  </label>
                  <Input
                    className="epiInputSize"
                    id="exampleFormControlSelect1"
                    type="select"
                    placeholder="Yes or No"
                    onChange={ (e) => MakeChangeText({
                      section: 'probe_section',
                      type: 'probe_width',
                      values: ['width'],
                      price_effect: false,
                      input_name: 'width',
                      text_input: true,
                      option: e
                    }, e)}
                  >
                    <option value="" selected disabled>Select Width</option>
                    <option value="1/2">1/2"</option>
                    <option value="3/4">3/4"</option>
                    <option value="1">1"</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col>
                { selectInputOptions == 1 && (
                  <FormGroup>
                    <label htmlFor="exampleFormControlSelect1">
                      <span className="customizerInputTitle">Length</span>
                      <Button className="questionToolTip" id="Gas" size="sm">
                        ?
                      </Button>{` `}
                      <UncontrolledTooltip placement="right" target="Gas" delay={0}>
                        Gas refers to the specific gas(es) that you will be metering. 
                        Your new meter will be precisely calibrated to measure the provided selection. 
                        If you select Natural or Mixed Gas, please input and verify the chemicals and percentages, 
                        totaling 100%, that make up the composition you will be flowing.
                      </UncontrolledTooltip>
                    </label>
                    <Input
                      disabled={ widthSelected? ('') : ('disabled') }
                      className="epiInputSize"
                      id="exampleFormControlSelect1"
                      type="select"
                      onChange={ (e) => MakeChangeText({
                        section: 'probe_section',
                        type: 'probe_length',
                        values: ['length'],
                        price_effect: true,
                        text_input: true,
                        option: e
                      }, e)}
                    >
                      <option value="" selected disabled>Select Length</option>
                      <option value="6">6"</option>
                      <option value="12">12"</option>
                      <option value="18">18"</option>
                      <option value="24">24"</option>
                      <option value="30">30"</option>
                      <option value="36">36"</option>
                    </Input>
                  </FormGroup>
                )}

                { selectInputOptions == 2 && (
                  <FormGroup>
                    <label htmlFor="exampleFormControlSelect1">
                      <span className="customizerInputTitle">Length</span>
                      <Button className="questionToolTip" id="Gas" size="sm">
                        ?
                      </Button>{` `}
                      <UncontrolledTooltip placement="right" target="Gas" delay={0}>
                        Gas refers to the specific gas(es) that you will be metering. 
                        Your new meter will be precisely calibrated to measure the provided selection. 
                        If you select Natural or Mixed Gas, please input and verify the chemicals and percentages, 
                        totaling 100%, that make up the composition you will be flowing.
                      </UncontrolledTooltip>
                    </label>
                    <Input
                      className="epiInputSize"
                      id="exampleFormControlSelect1"
                      type="select"
                      onChange={ (e) => MakeChangeText({
                        section: 'probe_section',
                        type: 'probe_length',
                        values: ['length'],
                        price_effect: true,
                        text_input: true,
                        option: e
                      }, e)}
                    >
                      <option value="" selected disabled>Select Length</option>
                      <option value="6">6"</option>
                      <option value="12">12"</option>
                      <option value="18">18"</option>
                      <option value="24">24"</option>
                      <option value="30">30"</option>
                      <option value="36">36"</option>
                      <option value="42">42"</option>
                      <option value="48">48"</option>
                      <option value="54">54"</option>
                      <option value="60">60"</option>
                    </Input>
                  </FormGroup>
                )}
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default ProbeSelection;
