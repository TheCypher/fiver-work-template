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

function ApplicationInformation({ handleChange, value }){
  const [selectInputOptions, setSelectInputOptions] = useState(0);
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

    (data.option_value === 'other') ? setSelectInputOptions(1) : setSelectInputOptions(0);

    handleChange(data);
  }

  const MakeChangeText = (data) => {
    data.option_value = data.option.target.value;
    handleChange(data);
  }

  var title = 'Application Information';
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
                    <span className="customizerInputTitle">Application</span>
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
                        'compressed_air',
                        'hvac',
                        'landfill_gas',
                        'natural_gas',
                        'waste_water',
                        'flue_gas',
                        'flare',
                        'other'
                      ],
                      price_effect: false,
                      option: e
                    }, e)}
                  >
                    <option value="" selected disabled>Select Application</option>
                    <option value="compressed_air">Compressed Air Flow Measurement</option>
                    <option value="hvac">HVAC & Air Vent</option>
                    <option value="landfill_gas">Landfill Gas & Municipal Flow</option>
                    <option value="natural_gas">Natural Gas Flow Measurement</option>
                    <option value="waste_water">Wastewater & Aeration Basin</option>
                    <option value="flue_gas">Flue Gas</option>
                    <option value="flare">Flare</option>
                    <option value="other">Other</option>
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
                    <span className="customizerInputTitle">Gas</span>
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
                      type: 'gas',
                      values: [
                        'Air', 
                        'Argon',
                        'Chlorine',
                        'Blast_Furnace_Gas',
                        'BioGas',
                        'Landfill_Gas',
                        'Ethylene',
                        'Ethane',
                        'Propane',
                        'Liquid_Propane_Gas',
                        'Butane_Gas',
                        'Benzene',
                        'Methane',
                        'Methane_Helium_Mix',
                        'Methane_Nitrogen_Mix',
                        'Carbon_Monoxide',
                        'Carbon_Dioxide',
                        'Hydrogen',
                        'Hydrogen_Nitrogen_Mix',
                        'Helium',
                        'Mix_Gas',
                        'Flare_gas',
                        'Flue_Gas',
                        'Nitrogen',
                        'Natural_Gas',
                        'Ammonia',
                        'Oxygen',
                        'O3',
                        'SNGPL_Gas',
                        'SSGCL_Gas',
                        'MARI_Gas'
                      ],
                      price_effect: true,
                      option: e
                    }, e)}
                  >
                    <option value="" selected disabled>Select a Gas</option>
                    <option value="Air">Air</option>
                    <option value="Argon">Argon</option>
                    <option value="Chlorine">Chlorine</option>
                    <option value="Blast_Furnace_Gas">Blast Furnace Gas</option>
                    <option value="BioGas">BioGas</option>
                    <option value="Landfill_Gas">Landfill Gas</option>
                    <option value="Ethylene">Ethylene</option>
                    <option value="Ethane">Ethane</option>
                    <option value="Propane">Propane</option>
                    <option value="Liquid_Propane_Gas">Liquid Propane Gas</option>
                    <option value="Butane_Gas">Butane Gas</option>
                    <option value="Benzene">Benzene</option>
                    <option value="Methane">Methane</option>
                    <option value="Methane_Helium_Mix">Methane Helium Mix</option>
                    <option value="Methane_Nitrogen_Mix">Methane Nitrogen Mix</option>
                    <option value="Carbon_Monoxide">Carbon Monoxide</option>
                    <option value="Carbon_Dioxide">Carbon Dioxide</option>
                    <option value="Hydrogen">Hydrogen</option>
                    <option value="Hydrogen_Nitrogen_Mix">Hydrogen Nitrogen Mix</option>
                    <option value="Helium">Helium</option>
                    <option value="Mix_Gas">Mix Gas</option>
                    <option value="Flare_gas">Flare Gas</option>
                    <option value="Flue_Gas">Flue Gas</option>
                    <option value="Nitrogen">Nitrogen</option>
                    <option value="Natural_Gas">Natural Gas</option>
                    <option value="Ammonia">Ammonia</option>
                    <option value="Oxygen">Oxygen</option>
                    <option value="O3">O3</option>
                    <option value="SNGPL_Gas">SNGPL Gas</option>
                    <option value="SSGCL_Gas">SSGCL Gas</option>
                    <option value="MARI_Gas">MARI Gas</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <hr />


            <Row>
              <Col>
                <FormGroup>
                  <label htmlFor="exampleFormControlSelect1">
                    <span className="customizerInputTitle">
                      Do you expect condensing moisture in the process line?
                    </span>
                    </label>
                  <Input
                    className="epiInputSize"
                    id="exampleFormControlSelect1"
                    type="select"
                    placeholder="Yes or No"
                    onChange={ (e) => MakeChangeDropdown({
                      section: 'application_information',
                      type: 'condensing_moisture',
                      values: [
                        'yes',
                        'no'
                      ],
                      price_effect: false,
                      option: e
                    }, e)}
                  >
                    <option value="" selected disabled>Select Yes or No</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col>

              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default ApplicationInformation;
