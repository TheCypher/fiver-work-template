import React, { useState, useEffect } from "react";
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

import CommunicationsOptions from "./InputPower/CommunicationsOptions/CommunicationsOptions";
import CommunicationBody from "./InputPower/CommunicationsOptions/CommunicationBody";

function InputPower({ handleChange, value }){
  const [inputPowerSelected, setInputPowerSelected] = useState({ power: false });
  const [selectedCommunication, setSelectedCommunication] = useState({ communications: false });
  const [selectedCommunicationName, setSelectedCommunicationName] = useState({ communications_name: 'Standard (MODBUS RTU)'})

  useEffect(() => {
    if(selectedCommunication.communications === 'standard') {setSelectedCommunicationName({communications_name:'Standard (MODBUS RTU)'})}
    if(selectedCommunication.communications === 'multi_range_temp_out') {setSelectedCommunicationName({communications_name:'Multi-Range + Temp Out'})}
    if(selectedCommunication.communications === 'multi_range_no_temp') {setSelectedCommunicationName({communications_name:'Multi-Range + No Temp'})}
    if(selectedCommunication.communications === 'hart') {setSelectedCommunicationName({communications_name:'HART'})}
    if(selectedCommunication.communications === 'bacnet') {setSelectedCommunicationName({communications_name:'BACnet'})}
    if(selectedCommunication.communications === 'profibus') {setSelectedCommunicationName({communications_name:'Profibus'})}
  }, [selectedCommunication.communications])

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  // collapse states and functions
  const [collapses, setCollapses] = useState([0]);
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

    if(data.change_effect === 'power'){
      setInputPowerSelected(prevState => ({
        ...prevState,  power: data.option_value
      }));

      setSelectedCommunication(prevState => ({
        ...prevState,  communications: 'standard'
      }));
    }

    if(data.change_effect === 'communications'){
      setSelectedCommunication(prevState => ({
        ...prevState,  communications: data.option_value
      }));
    }

    handleChange(data);
  }

  var title = 'Input Power & Communication Options';
  if (isMobile) {
    if(title.length > 18) title = title.substring(0,18) + '...';
  }
  
  const { power } = inputPowerSelected;
  const { communications } = selectedCommunication;
  const { communications_name }= selectedCommunicationName;
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
                    <span className="customizerInputTitle">Input Power</span>
                    <Button className="questionToolTip" id="Application" size="sm">
                      ?
                    </Button>{` `}
                    <UncontrolledTooltip placement="right" target="Application" delay={0}>
                      The Input Power selection allows you to specify whether the system should be supplied by AC or DC power, 
                      as well as the voltage. Some of the communication configurations below are dependent on certain types of power; 
                      incompatible configurations will be grayed out dependent on your Input Power selection.
                    </UncontrolledTooltip>
                    </label>
                  <Input
                    className="epiInputSize"
                    id="exampleFormControlSelect1"
                    type="select"
                    onChange={ (e) => MakeChangeDropdown({
                      section: 'input_power_communication',
                      type: 'input_power',
                      values: [
                        'vdc_12_18',
                        'vdc_18_24',
                        'vac_105_120',
                        'vac_210_240'
                      ],
                      price_effect: true,
                      change_effect: 'power',
                      option: e
                    }, e)}
                  >
                    <option value="" selected disabled>Select Input Power</option>
                    <option value="vdc_12_18">12 to 18 VDC</option>
                    <option value="vdc_18_24">18 to 24 VDC</option>
                    <option value="vac_105_120">VAC 105 to 120</option>
                    <option value="vac_210_240">VAC 210 to 240</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <label htmlFor="exampleFormControlSelect1">
                    <span className="customizerInputTitle">Communication Options</span>
                    <Button className="questionToolTip" id="ApplicationCommunication" size="sm">
                      ?
                    </Button>{` `}
                    <UncontrolledTooltip placement="right" target="ApplicationCommunication" delay={0}>
                      Select Communication Options
                    </UncontrolledTooltip>
                  </label>
                  { !inputPowerSelected.power ? (
                    <Input
                      disabled
                      className="epiInputSize"
                      id="exampleFormControlSelect1"
                      type="select"
                    >
                      <option value="" selected disabled>Select Communication Options</option>
                    </Input>
                  ) : (<> </>)}

                  { inputPowerSelected.power ? (
                    <CommunicationsOptions
                      MakeChangeDropdown={MakeChangeDropdown}
                      selectedPower={ power }
                      communicationsName={ communications_name }
                    />
                  ) : (<> </>)}
                </FormGroup>
              </Col>
            </Row>
            <br />


            { inputPowerSelected.power ? (
              <span className="customizerInputTitle">{ communications_name }</span>
            ) : (<></>)}

            { inputPowerSelected.power ? (
              <CommunicationBody
                handleChange={handleChange}
                selectedCommunication={communications}
              />
            ) : (<></>)}
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default InputPower;