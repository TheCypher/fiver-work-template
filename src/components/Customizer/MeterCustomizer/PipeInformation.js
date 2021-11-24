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

import {
  TabContent,
  TabPane
} from "reactstrap";

import Pipe from "./PipeInformantion/Pipe";
import PipeStandard from "./PipeInformantion/PipeStandard";
import DuctShape from "./PipeInformantion/DuctShape";
import Duct from "./PipeInformantion/Duct";
import Tube from "./PipeInformantion/Tube";

function PipeInformation({ handleChange, value }){
  const [tabType, setTabType] = useState("Pipe");
  const [ductShape, setDuctShape] = useState('rectangular');
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

  const MakeChange = (data) => {
    handleChange(data);
    setTabType(data.tab);
  }

  const MakeChangeDropdown = (data) => {
    data.option_value = data.option.target.value;
    handleChange(data);
  }

  const BottomOptions = () => {
    if(tabType === "Pipe"){
      return <PipeStandard />
    }
    
    if(tabType === "Duct"){
      return(
        <DuctShape 
          handleChange={ handleChange }
          value={ value }
          setDuctShape={ setDuctShape }
        />
      );
    }

    if(tabType === "Tube"){
      return(<> </>);
    }
  }

  var title = 'Pipe Information';
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
            aria-expanded={collapses.includes(1)}
            data-toggle="collapse"
            href="#pablo"
            onClick={e => {
              e.preventDefault();
              changeCollapse(1);
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

        <Collapse isOpen={collapses.includes(1)}>
          <CardBody>
            <Row>
              <Col>
                <span>
                  <span className="customizerInputTitle">Type</span>
                  <Button className="questionToolTip" id="Type" size="sm">
                      ?
                  </Button>{` `}
                  <UncontrolledTooltip placement="right" target="Type" delay={0}>
                    Type Information needed
                  </UncontrolledTooltip>
                </span>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <span className="customizerInputTitleSmallX1">Pipe</span>
                    <Input
                      defaultChecked
                      onClick={ (e) => MakeChange({
                        section: 'pipe_infornation',
                        type: 'type',
                        values: ['pipe', 'duct', 'tube'],
                        price_effect: false,
                        tab: 'Pipe'
                      }, e)}
                      id="type2"
                      name="type2"
                      type="radio"
                    ></Input>
                    <span className="form-check-sign"></span>
                  </Label>
                </FormGroup>

                {
                  /**
                    <FormGroup check className="form-check-radio">
                      <Label check>
                        <span className="customizerInputTitleSmallX1">Duct</span>
                        <Input
                          onClick={ (e) => MakeChange({
                            section: 'pipe_infornation',
                            type: 'type',
                            values: ['duct', 'pipe', 'tube'],
                            price_effect: false,
                            tab: 'Duct'
                          }, e)}
                          id="type2"
                          name="type2"
                          type="radio"
                        ></Input>
                        <span className="form-check-sign"></span>
                      </Label>
                    </FormGroup>
                    <FormGroup check className="form-check-radio">
                      <Label check>
                        <span className="customizerInputTitleSmallX1">Tube</span>
                        <Input
                          onClick={ (e) => MakeChange({
                            section: 'pipe_infornation',
                            type: 'type',
                            values: ['tube', 'duct', 'pipe'],
                            price_effect: false,
                            tab: 'Tube'
                          }, e)}
                          id="type2"
                          name="type2"
                          type="radio"
                        ></Input>
                        <span className="form-check-sign"></span>
                      </Label>
                    </FormGroup>
                   */
                }
                <br />

                <BottomOptions />
              </Col>

              <Col className="col-9">
                <TabContent activeTab={"tabs" + tabType}>
                  <TabPane tabId="tabsPipe">
                    <Pipe
                      handleChange={ handleChange }
                      value={ value }
                    />
                  </TabPane>

                  <TabPane tabId="tabsDuct">
                    <Duct
                      handleChange={ handleChange }
                      value={ value }
                      ductShape={ ductShape }
                    />
                  </TabPane>

                  <TabPane tabId="tabsTube">
                    <Tube
                      handleChange={ handleChange }
                      value={ value }
                    />
                  </TabPane>
                </TabContent>
              </Col>

            </Row>
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default PipeInformation;
