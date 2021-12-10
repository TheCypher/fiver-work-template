import React from "react";
import { useMediaQuery } from 'react-responsive';

// reactstrap components
import {
  UncontrolledCollapse,
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
} from "reactstrap";

function QuestionsOrComments({handleChange, value }){
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

  var title = 'Questions or Comments';
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
                    <span className="customizerInputTitle">From</span>
                  </label>
                  <Input
                    className="epiInputSize"
                    id="exampleFormControlSelect1"
                    type="text"
                    placeholder="sales@epiflow.com"
                    onChange={ (e) => MakeChangeDropdown({
                      section: 'questions_or_comments',
                      type: 'input_values',
                      values: ['from_email', 'contact_option', 'comments'],
                      price_effect: false,
                      option: e
                    }, e)}
                  >
                  </Input>
                </FormGroup>
              </Col>

              <Col>
                <FormGroup>
                  <label htmlFor="exampleFormControlSelect1">
                    <span className="customizerInputTitle">To</span>
                  </label>
                  <br />
                  <span className="customizerInputTitleSmallX1">EPI Sales Team</span>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup check>
              <Label check>
                <Input
                  id="inlineCheckbox123"
                  type="checkbox"
                ></Input>
                <span className="customizerInputTitleSmallX1">
                  Select if you would like an EPI representative to contact you regarding this quote.
                </span>

                {" "}
                <span className="form-check-sign">
                  <span className="check"></span>
                </span>
              </Label>
            </FormGroup>
            <br />

            <FormGroup>
              <label htmlFor="inputAddress">
                <span className="customizerInputTitle">Enter Comments</span>
              </label>
              <Input
                className="epiTextArea"
                id="inputAddress"
                placeholder="Enter any additional information or comments here."
                type="textarea"
              ></Input>
            </FormGroup>
          </CardBody>
        </Collapse>
      </Card>
    </>
  );
}

export default QuestionsOrComments;
