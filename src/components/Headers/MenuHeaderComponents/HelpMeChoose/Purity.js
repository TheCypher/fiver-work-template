import React from "react";
// reactstrap components
import {
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Row
} from "reactstrap";
// core components

function Purity({ nextStep, prevStep, handleChange, value }){

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  // for back even listner
  const GoBack = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <>
      <p className="nav-product-main-title" style={{ 'margin-top': '40px', 'margin-bottom': '40px'}}>Do you require a high purity meter?</p>
      <Row style={{ 'margin-bottom': '40px'}}>
        <Col>
          <FormGroup check className="form-check-radio">
            <Label check>
              <Row>
                <Col md="3"><img src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg"/></Col>
                <Col>
                  <strong>No</strong>
                </Col>
              </Row>
              <Input
                defaultChecked
                defaultValue="no"
                onChange={ handleChange('purity')}
                id="exampleRadios1"
                name="exampleRadios"
                type="radio"
              ></Input>
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup check className="form-check-radio">
            <Label check>
              <Row>
                <Col md="3"><img src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg"/></Col>
                <Col>
                  <strong>Yes</strong>
                </Col>
              </Row>
              <Input
                defaultValue="yes"
                onChange={ handleChange('purity')}
                id="exampleRadios1"
                name="exampleRadios"
                type="radio"
              ></Input>
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button 
            color="info" 
            style={{ 'font-size': '16px' }}
            onClick={ GoBack }
          >
            Previous
          </Button>
        </Col>

        <Col className="text-right">
          <Button 
            color="info" 
            style={{ 'font-size': '16px' }}
            onClick={ Continue }
          >
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Purity;