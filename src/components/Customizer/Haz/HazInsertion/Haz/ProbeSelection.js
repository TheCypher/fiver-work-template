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
  const [selectInputOptions, setSelectInputOptions] = useState(0);
  const [selectInputOptionsTwo, setSelectInputOptionsTwo] = useState(0);
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

    if(data.input_name === 'application'){
      (data.option_value === 'other') ? setSelectInputOptions(1) : setSelectInputOptions(0);
    }

    if(data.input_name === 'gas'){
      (data.option_value === 'other') ? setSelectInputOptionsTwo(1) : setSelectInputOptionsTwo(0);
    }

    handleChange(data);
  }

  const MakeChangeText = (data) => {
    data.option_value = data.option.target.value;
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
                    onChange={ (e) => MakeChangeDropdown({
                      section: 'application_information',
                      type: 'application_options',
                      values: [
                        '1/2',
                        '3/4',
                        '1'
                      ],
                      price_effect: false,
                      input_name: 'application',
                      option: e
                    }, e)}
                  >
                    <option value="" selected disabled>Select Width</option>
                    <option value="compressed_air">1/2"</option>
                    <option value="hvac">3/4"</option>
                    <option value="landfill_gas">1"</option>
                  </Input>
                </FormGroup>

              { selectInputOptions ? (
                <FormGroup>
                  <Input
                    className="epiInputSize"
                    id="exampleFormControlSelect1"
                    type="text"
                    placeholder="Enter Application"
                    onChange={ (e) => MakeChangeText({
                      section: 'application_information',
                      type: 'application_options_other',
                      values: ['application'],
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
                    onChange={ (e) => MakeChangeDropdown({
                      section: 'application_information',
                      type: 'length',
                      values: [
                        6, 
                        12,
                        18,
                        24,
                        30,
                        36,
                        'other'
                      ],
                      price_effect: true,
                      input_name: 'gas',
                      option: e
                    }, e)}
                  >
                    <option value="" selected disabled>Select Length</option>
                    <option value="Air">6"</option>
                    <option value="Argon">12"</option>
                    <option value="Chlorine">18"</option>
                    <option value="Blast_Furnace_Gas">24"</option>
                    <option value="BioGas">30"</option>
                    <option value="Landfill_Gas">36"</option>
                  </Input>
                </FormGroup>

                { selectInputOptionsTwo ? (
                  <FormGroup>
                    <Input
                      className="epiInputSize"
                      id="exampleFormControlSelect1"
                      type="text"
                      placeholder="Enter Gas"
                      onChange={ (e) => MakeChangeText({
                        section: 'application_information',
                        type: 'gas_other',
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
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default ProbeSelection;
