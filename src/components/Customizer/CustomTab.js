import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";

function CustomTab({ nextStep, prevStep, handleChange, value }){
  console.log('Show me customize data 1.0 =>', value)

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

  const MakeChange = (data) => {
    console.log('Show me make change data 1.0 =>', data);
    handleChange(data);
  }

  return (
    <>
      <Card>
        <CardBody>
          <Row>
            <Col>
              <span>Pipe Orientation</span>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Row>
                    <Col>
                      Horizion
                    </Col>
                  </Row>
                  <Input
                    defaultChecked
                    onClick={ (e) => MakeChange({ 
                      type: 'pipe_orientation',
                      value: 'horizion'
                    }, e)}
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Row>
                    <Col>
                      Vertical
                    </Col>
                  </Row>
                  <Input
                    defaultChecked
                    onClick={ (e) => MakeChange({ 
                      type: 'pipe_orientation',
                      value: 'vertical'
                    }, e)}
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup><br />

              <span>Flow Direction</span>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Row>
                    <Col>
                      Top to Bottom
                    </Col>
                  </Row>
                  <Input
                    defaultChecked
                    defaultValue="no"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Row>
                    <Col>
                      Bottom to Top
                    </Col>
                  </Row>
                  <Input
                    defaultChecked
                    defaultValue="no"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup><br />


              <span>Enclosure Mounting Preference</span>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Row>
                    <Col>
                      Left Side
                    </Col>
                  </Row>
                  <Input
                    defaultChecked
                    defaultValue="no"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Row>
                    <Col>
                      Right Side
                    </Col>
                  </Row>
                  <Input
                    defaultChecked
                    defaultValue="no"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup><br />

              <span>Display Orientation</span><br />
              <Button
                color="info"
                size="lg"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Rotate 90
              </Button>
            </Col>
            <Col className="text-center">
              <CardImg alt="..." src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg" top></CardImg>
            </Col>
          </Row>
        </CardBody>
      </Card>


      <Card>
        <CardBody>
          <Row>
            <Col>
              <Row>
                <Col style={{ 'margin-bottom': '30px'}}>
                  <span>Transmitter</span><br />
                  <strong>Integrated Electronics</strong><br />
                </Col>
              </Row>
              <Row>
                <Col className="align-items-center">
                  <span>Transmitter</span><br />
                  <strong>Integrated Electronics</strong><br />
                </Col>
              </Row>
            </Col>
            <Col className="text-center">
              <CardImg alt="..." src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg" top></CardImg>
            </Col>
          </Row>
        </CardBody>
      </Card>



      <Row>
        <Col>
          <Button
            color="info"
            size="lg"
            outline
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Back
          </Button>
        </Col>
        <Col className="text-right">
          <Button 
            color="info"
            size="lg"
          >
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default CustomTab;