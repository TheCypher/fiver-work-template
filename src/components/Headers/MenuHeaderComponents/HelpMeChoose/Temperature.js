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

function Temperature({ nextStep, prevStep, handleChange, value }){

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
      <p className="nav-product-main-title" style={{ 'margin-top': '40px', 'margin-bottom': '40px'}}>What is the max temperature rating you require?</p>
      <Row style={{ 'margin-bottom': '40px'}}>
        <Col>
          <FormGroup check className="form-check-radio">
            <Label check>
              <Row>
                <Col md="3"><img src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg"/></Col>
                <Col>
                  <strong>50°C to 125°C (Add °F)</strong>
                </Col>
              </Row>
              <Input
                defaultChecked
                defaultValue="125"
                onChange={ handleChange('temperature')}
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
                  <strong>Up to 525°C</strong>
                </Col>
              </Row>
              <Input
                defaultValue="525"
                onChange={ handleChange('temperature')}
                id="exampleRadios1"
                name="exampleRadios"
                type="radio"
              ></Input>
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
        </Col>
      </Row>

      <Row style={{ 'margin-bottom': '40px'}}>
        <Col>
          <FormGroup check className="form-check-radio">
            <Label check>
              <Row>
                <Col md="3"><img src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg"/></Col>
                <Col>
                  <strong>125°C to 200°C</strong>
                </Col>
              </Row>
              <Input
                defaultValue="200"
                onChange={ handleChange('temperature')}
                id="exampleRadios1"
                name="exampleRadios"
                type="radio"
              ></Input>
              <span className="form-check-sign"></span>
            </Label>
          </FormGroup>
        </Col>

        <Col>
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

export default Temperature;