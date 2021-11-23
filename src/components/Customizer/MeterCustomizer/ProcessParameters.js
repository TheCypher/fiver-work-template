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

import FlowRate from "./ProcessParameters/FlowRate";
import Gas from "./ProcessParameters/Gas";
import Ambient from "./ProcessParameters/Ambient";
import Pressure from "./ProcessParameters/Pressure";

function ProcessParameters({handleChange, value }){
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [errors, setErrors] = useState(
    {
      max_flow_rate: false,
      max_gas_temp: false,
      min_gas_pressure: false
    }
  );

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

  const MakeChangeText = (data) => {
    data.option_value = data.option.target.value;
    handleChange(data);
  }

  const CheckErrors = (data) => {
    const { input_name, input_value } = data;

    const set = () => {
      setErrors(prevState => ({
        ...prevState,
          [input_name]: true
      })); 
    }

    const unSet = () => {
      console.log('Show me error data 1.0 =>', data);
      setErrors(prevState => ({
        ...prevState,
          [input_name]: false
      })); 
    }
    
    if(input_name === "max_flow_rate" && input_value > 24999){
      set()
    } else if(errors[input_name]) {
      unSet()
    }

    if(input_name === "max_gas_temp" && input_value > 250){
      set()
    } else if(errors[input_name]) {
      unSet()
    }
  }

  var title = 'Process Parameters';
  if (isMobile) {
    if(title.length > 18) title = title.substring(0,18) + '...';
  }

  const { max_flow_rate, max_gas_temp, min_gas_pressure } = errors;
  const error_values = { max_flow_rate, max_gas_temp, min_gas_pressure }

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
            <FlowRate
              MakeChangeText={MakeChangeText}
              MakeChangeDropdown={MakeChangeDropdown}
              CheckErrors={CheckErrors}
              ErrorValues={error_values}
            />
            <Gas
              MakeChangeText={MakeChangeText}
              MakeChangeDropdown={MakeChangeDropdown}
              CheckErrors={CheckErrors}
              ErrorValues={error_values}
            />
            <Ambient
              MakeChangeText={MakeChangeText}
              MakeChangeDropdown={MakeChangeDropdown}
            />
            <Pressure
              MakeChangeText={MakeChangeText}
              MakeChangeDropdown={MakeChangeDropdown}
            />
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default ProcessParameters;
