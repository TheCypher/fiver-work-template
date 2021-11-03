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

function Approvals({ nextStep, prevStep, handleChange, value }){

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
      <p className="nav-product-main-title" style={{ 'margin-top': '40px', 'margin-bottom': '40px'}}>Do you require approvals?</p>
      <Row style={{ 'margin-bottom': '40px'}}>
        <Col>
          <FormGroup check className="form-check-radio">
            <Label check>
              <Row>
                <Col md="3"><img src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg"/></Col>
                <Col>
                  <strong>Hazardous Locations/Explosion-Proof</strong> <br />
                  <strong>(CSA/CUS, IECEx, KOSHA, ATEX)</strong>
                </Col>
              </Row>
              <Input
                defaultChecked
                defaultValue="hazardous"
                onChange={ handleChange('approvals')}
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
                  <strong>No Approvals Needed</strong>
                </Col>
              </Row>
              <Input
                defaultValue="none"
                onChange={ handleChange('approvals')}
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
                  <strong>CSA/CUS Non-Hazardous / General Locations</strong>
                </Col>
              </Row>
              <Input
                defaultValue="general"
                onChange={ handleChange('approvals')}
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
            disabled
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

export default Approvals;