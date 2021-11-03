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

function LineSize({ nextStep, prevStep, handleChange, value }){

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
      <p className="nav-product-main-title" style={{ 'margin-top': '40px', 'margin-bottom': '40px'}}>What is your line size?</p>
      <Row style={{ 'margin-bottom': '40px'}}>
        <Col>
          <FormGroup check className="form-check-radio">
            <Label check>
              <Row>
                <Col md="3"><img src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg"/></Col>
                <Col>
                  <strong>1/8-1/4”</strong>
                </Col>
              </Row>
              <Input
                defaultChecked
                defaultValue="0.4"
                onChange={ handleChange('line_size')}
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
                  <strong>1/4-2”</strong>
                </Col>
              </Row>
              <Input
                defaultValue="2"
                onChange={ handleChange('line_size')}
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
                  <strong>2-4”</strong>
                </Col>
              </Row>
              <Input
                defaultValue="0.4"
                onChange={ handleChange('line_size')}
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
                  <strong>4+”</strong>
                </Col>
              </Row>
              <Input
                defaultValue="2"
                onChange={ handleChange('line_size')}
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

export default LineSize;