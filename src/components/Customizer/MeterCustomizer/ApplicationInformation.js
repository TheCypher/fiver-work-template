import React from "react";
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

function ApplicationInformation({ handleChange, value }){
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

    handleChange(data);
  }

  const MakeChange = (data) => {
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
                    Application
                    <Button className="questionToolTip" id="Application" size="sm">
                      ?
                    </Button>{` `}
                    <UncontrolledTooltip placement="right" target="Application" delay={0}>
                      Application Information Needed
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
                    <option value="1.5">Select Application</option>
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

              <Col>
                <FormGroup>
                  <label htmlFor="exampleFormControlSelect1">
                    Gas
                    <Button className="questionToolTip" id="Gas" size="sm">
                      ?
                    </Button>{` `}
                    <UncontrolledTooltip placement="right" target="Gas" delay={0}>
                        Gas Information Needed
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
                    <option value="Methane_Helium_Mix">Methane HeliumMix</option>
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
              <span>
                  Reference Conditions
                  <Button className="questionToolTip" id="ReferenceConditions" size="sm">
                      ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="ReferenceConditions" delay={0}>
                    Reference Conditions Information needed
                  </UncontrolledTooltip>
                </span>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        Standard Temperature & Pressure: 60°F and 29.92” Hg
                      </Col>
                    </Row>
                    <Input
                      defaultChecked
                      onClick={ (e) => MakeChange({
                        section: 'application_information',
                        type: 'reference_conditions',
                        values: ['temperature_60', 'temperature_70', 'temperature_0'],
                        price_effect: false
                      }, e)}
                      id="type"
                      name="type"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        Standard Temperature & Pressure: 70°F and 29.92” Hg
                      </Col>
                    </Row>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'application_information',
                        type: 'reference_conditions',
                        values: ['temperature_70', 'temperature_60', 'temperature_0'],
                        price_effect: false                      }, e)}
                      id="type"
                      name="type"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Row>
                      <Col>
                        Normal Temperature & Pressure: 0°C and 1.013 Bar Abs.
                      </Col>
                    </Row>
                    <Input
                      onClick={ (e) => MakeChange({
                        section: 'application_information',
                        type: 'reference_conditions',
                        values: ['temperature_0', 'temperature_60', 'temperature_70'],
                        price_effect: false
                      }, e)}
                      id="type"
                      name="type"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="exampleFormControlSelect1">
                    Other
                    <Button className="questionToolTip" id="Gas" size="sm">
                      ?
                    </Button>{` `}
                    <UncontrolledTooltip placement="right" target="Gas" delay={0}>
                        Gas Information Needed
                    </UncontrolledTooltip>
                  </label>
                  <Input
                    className="epiInputSize"
                    id="exampleFormControlSelect1"
                    type="select"
                    onChange={ (e) => MakeChangeDropdown({
                      section: 'application_information',
                      type: 'other_temperature',
                      values: [
                        'temperature_70',
                        'temperature_21',
                        'temperature_20', 
                        'temperature_0_Bar',
                        'temperature_0_Hg',
                        'temperature_20kPa',
                        'temperature_0ׄ_1_Bar',
                        'temperature_60_ATM'
                      ],
                      price_effect: false,
                      option: e
                    }, e)}
                  >
                    <option value="" selected disabled hidden>Select Other Conditions</option>
                    <option value="temperature_70">70°F & 29.92" Hg</option>
                    <option value="temperature_21">21.1°C & 1.01325 BarA</option>
                    <option value="temperature_20">20°C & 1.01325 BarA</option>
                    <option value="temperature_0_Bar">0°C & 1.01325 BarA</option>
                    <option value="temperature_0_Hg">0°C & 760mm Hg</option>
                    <option value="temperature_20kPa">20°C & 101.325 kPa A</option>
                    <option value="temperature_0ׄ_1_Bar">0ׄ°C & 1.000 Bar A</option>
                    <option value="temperature_60_ATM">60°F & 1 ATM</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <label htmlFor="exampleFormControlSelect1">
                    Do you expect condensing moisture in the process line?
                    <Button className="questionToolTip" id="CondensingMoisture" size="sm">
                      ?
                    </Button>{` `}
                    <UncontrolledTooltip placement="right" target="CondensingMoisture" delay={0}>
                      Information Needed
                    </UncontrolledTooltip>
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
                    <option value="" selected disabled hidden>Select Yes or No</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default ApplicationInformation;
